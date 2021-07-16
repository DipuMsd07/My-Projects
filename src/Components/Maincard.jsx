import React,{useState} from 'react';
import data from './data';
import Card from './Card';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Maincard = () =>{

    const [item,setItem] = useState(data);

    const filterList = (cat) =>{
        const updatedList = data.filter((elem)=>{
            return elem.category === cat;
        })
        setItem(updatedList);
    }

    return(
        <>
            <div className="btns">
                    <button className="active" onClick={()=> setItem(data)}>All</button>
                    <button onClick={()=> filterList('Html')}>Html&Css</button>
                    <button onClick={()=> filterList('Js')}>JavaScript</button>
                    <button onClick={()=> filterList('React')}>React</button>
                    <button onClick={()=> filterList('Other')}>Other</button>
                </div>

                <div className="maincard">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">  
                    {
                        item.map( (val) =>{
                            const {id,imgsrc,name,altName,category,link} = val;
                            return(
                                <Card
                                    key={id}
                                    imgsrc={imgsrc}
                                    name={name}
                                    altName={altName}
                                    category={category}
                                    link={link}
                                />
                            )
                        })
                    }
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Maincard;