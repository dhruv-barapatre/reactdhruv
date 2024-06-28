 import React, { useEffect, useState } from 'react'
 
 const Fetch = () => {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)
    const fetchdata=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
            setloading(false)
        })
        .catch(err=>console.log(err))

    }

    useEffect(()=>{
        fetchdata()
    },[])
   return loading ?"Loading....": (
     <>
     {data.map((e)=>{
        return(
            <div key={e.id} style={{border:"1px solid aqua",padding:"10px 20px",margin:"30px"}} >
                <h3>{e.title}</h3>
                <p>{e.body}</p>
            </div>
        )
     })}
     </>
     
   )
 }
 
 export default Fetch