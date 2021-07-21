import React from 'react';
import data from './data';

const AllBtns = [...new Set(data.map((curElem)=> curElem.category))];

const Btns = ({filterList,setItem}) => {
    return(
        <div className="btns">
            <button className="active" onClick={()=> setItem(data)}>All</button>
            {
                AllBtns.map((curElem)=>{
                    return <button onClick={()=> filterList(curElem)}>{curElem}</button>
                })
            }
        </div>
    )  
}

export default Btns;