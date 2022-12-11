import React,{useEffect, useState} from "react"

 function Cards (){

  const [tender, setTender]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/tenders`).then(r => {
      if(r.ok){
        
        r.json().then(data => setTender(data))
      }
    })
  },[])

  const myStyles = {
    color: "black",
    backgroundColor: "red",
    fontSize: "3rem",
    display: "block"
  }
  
  const tenderComponents = tender.map(tend => {
    return (
        <div key={tend.id}>
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div style={myStyles} >
                <p >{tend.tendername}</p>
                <p >{tend.tendernumber}</p>
            </div>
        </div>
    )
  })

  return (
    <>
        {tenderComponents}
    </>
  )
 };


    

 export default Cards