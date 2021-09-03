import React,{useState,useEffect} from 'react'
import "../Ustra/product.css";


function Product(props){
    const[state,setState]=useState(false);
    const MAX_ITEMS = 3;
    const[product,setProduct]=useState([]);

    const getProductData=async()=>{
        try{
            const res=await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${props.catid}`);
            const actualData=await res.json();
            setProduct(actualData.products);
            
        }
        catch(err){
            console.log(err);
        }   
    }  
     

    useEffect(()=>{
        getProductData();
    },[props.catid]);

    const toggle=() => {
        setState(!state);
      }

    const getRenderedItems=()=>{
        if(state){
          setProduct(product);
        }
         setProduct(product.slice(0,MAX_ITEMS));
      }

      useEffect(()=>{
        getRenderedItems();
    },[state]);
    console.log(product);
      

    return (
        <div>
          <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-2">
            
                                {product.map((val)=>{
                                   return(<>
                                   <div className="col-md-4 col-10 mx-4">
                                   <div className="card" id="all_cards">
                                        <div className="row g-3">
                                            <div className="col-lg-4 col-md-6 col-sm-4">
                                            <img className="card-img" src={val.image_urls.x520} style={{maxWidth:"300px"}} alt="Card"/>
                                            <p>This is local image</p>
                                            </div>
                                            <div className="col-lg-8 col-md-6 col-sm-8">
                                            <div className="card-body">
                                            {/* {val.rating?<span  id="rating" className="fa fa-star">{val.rating}</span>:""} */}
                                                    <h5 className="card-title">{val.name}</h5>
                                                    <h5 className="card-title1">({val.weight} {val.weight_unit})</h5>
                                                    <h5 className="card-title2">₹ {val.price}<strike className="card-title3">₹{val.price+200}</strike></h5>
                                                   
                                                   
                                                    {val.is_in_stock?
                                                    <button href="#" className="btn btn mt-2" id="btn1">ADD TO CART</button>:
                                                    <button href="#" className="btn btn mt-2"  id="btn2" disabled>OUT OF STOCK</button>}
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                                                            
                                     
                                            
                                            
                                        
                                    
                                </>)
                               })}
                               <button className='btn btn' id="button1" onClick={toggle}>
                                                    {state?'less':'more'}</button>

                      
                       </div>
                       </div>


                   
            </div>
        </div>
    )
}

export default Product
