import React,{useState} from 'react'
import "../Ustra/Row.css"
import Products from '../Ustra/Products'

function Row(props) {
    const[id,setId]=useState(185);

    const getProductsId=(event)=>{
        const id=event.target.id;
        const n = id.toString();
        setId(n);
    }
    
    return (
        <div>
            <div className="container mb-5">
            <div className="row_posters"  onClick={getProductsId}>
                {props.data.map((val)=>{
                    return(
                    <>
                    
                    <img  id={val.category_id} className="row_poster" src={val.category_image} alt="image_no"/>
                    {/* <p className="category">{val.category_name.toUpperCase()}</p> */}
                    
                    
                   
                    
                    </>)
                })}
                 </div>
            </div>
            <Products  catid={id}/>
        </div>
    )
}

export default Row;
