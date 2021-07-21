import React,{useState} from 'react';
import data from './data';
import Card from './Card';
import Btns from './Btns';

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
            <Btns filterList={filterList} setItem={setItem}/>
                <div className="maincard">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">  
                    {
                        item.map(({id,imgsrc,name,altName,category,link})=>{
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