import React, {useState, useEffect} from 'react'
import {Helmet} from "react-helmet-async";
import axios from 'axios';
import useAxios from 'axios-hooks';
function Faqs() { 

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    'https://reqres.in/api/users/1'
  ) 
  const [{ data: getDataTwo, loading: getLoadingTwo, error: getErrorTwo }] = useAxios(
    'https://reqres.in/api/users/2'
  )
  if (getLoading || getLoadingTwo) return <p>Loading...</p>
  if (getError || getErrorTwo) return <p>Error!</p>
      return (
        <div>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Faqs Page</title> 
                </Helmet> 
                {getData && <p>{`User One name is ${getData.data.first_name} ${getData.data.last_name}`}</p>}  
                {getDataTwo && <p>{`User Two name is ${getDataTwo.data.first_name} ${getDataTwo.data.last_name}`}</p>} 
        </div>
      )
}

export default Faqs
