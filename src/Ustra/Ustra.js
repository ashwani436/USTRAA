import React from 'react'
import {useEffect,useState} from "react";
import Row from '../Ustra/Row';
import Nav from "../Ustra/Nav";


function Ustra() {

    const[data,setdata]=useState([]);
  


    const getCategoryData=async()=>{
        try{
            const res=await fetch('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob');
            const actualData=await res.json();
            setdata(actualData.category_list);
            
        }
        catch(err){
            console.log(err);
        }   
    }  
  

    useEffect(()=>{
        getCategoryData();
    },[]);
    


    
  
    
    return(
        < >
           
            <div className="container">
            <Nav/>
            <h3 className="my-3">Our Products</h3><hr/>
            <Row data={data}/>
            </div>
        </>
    )
}

export default Ustra;
