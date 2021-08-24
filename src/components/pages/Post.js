import React from 'react'
import {useParams} from 'react-router-dom';
import useAxios from 'axios-hooks' 
import Card from '../Card'; 
const Post = () => {
    let { id } = useParams();

    const [{ data: item, loading, error }] = useAxios(
            `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>  
    return (
        <div className="container">
            <Card id={item.id} title={item.title} body={item.body} key={item.id} /> 
        </div>
    )
}

export default Post;
