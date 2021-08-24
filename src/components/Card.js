import React from 'react'
import {Link} from 'react-router-dom';

function Card(props) { 
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <Link to={ `/blog/${props.id}`}><img className="img-fluid" src="https://source.unsplash.com/collection/190727/1600x900" alt={props.title} /></Link>
                    <div className="card-body">
                    <h2>{props.title}</h2>
                    <p className="card-text">{props.body}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Card
