import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) =>{
    return(
        <>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="row card">
                            <div className="card-image">
                                <a rel="noreferrer" href={props.link} target="_blank">
                                    <img src={props.imgsrc} alt={props.altName}/>
                                </a>
                            </div>
                            <div className="card-text">
                                <h2>{props.name}</h2>
                            </div>
                    </div>
                </div>
        </>
    )
}
export default Card;