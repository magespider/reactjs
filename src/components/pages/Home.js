import React from 'react'
import {Helmet} from "react-helmet-async"; 
import useAxios from 'axios-hooks'
import Card from '../Card'; 
function Home() { 
    const [{ data: items, loading, error }] = useAxios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p> 

    return (
        <>
            <main>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home Page</title> 
                </Helmet>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">dfgdfg</h1>
                        <p className="lead text-muted">fghfgh</p>
                        <p>
                            <a href="https://github.com/" className="btn btn-primary my-2">Main call to action</a>
                            <a href="https://github.com/" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                        </div>
                    </div>
                </section> 
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
                            { items.length > 0 ?
            <>
                {items.map( (item, index) => {
                    return <Card id={item.id} title={item.title} body={item.body} key={item.id} />;
                }                    
                )}
            </>
            : <div> No post found! </div> }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
