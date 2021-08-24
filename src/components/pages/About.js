import React from 'react'
import {Helmet} from "react-helmet-async";
function About() {
    return (
        <>
            <main>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About Page</title> 
                </Helmet>
                <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">About Page</h1>
                    <p className="lead text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>
                        <a href="https://github.com/" className="btn btn-primary my-2">Main call to action</a>
                        <a href="https://github.com/" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}

export default About
