import React from 'react';
import data from './data';


const Card = ({key,link,imgsrc,altName,name}) =>{
    return(
        <>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={key}>
                    <div className="row card">
                            <div className="card-image">
                                <a rel="noreferrer" href={link} target="_blank">
                                    <img src={imgsrc} alt={altName}/>
                                </a>
                            </div>
                            <div className="card-text">
                                <h2>{name}</h2>
                            </div>
                    </div>
                </div>
        </>
    )
}
export default Card;