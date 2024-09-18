import React from 'react'
import Sdata from "./Sdata"


import "./Service.css"

function Services() {
  return (
    <>
       <h1 className='text-center fw-bold service'>My Projects</h1>
      <hr className='w-50 mx-auto mt-3' />

      <div className="container ">
        <div className="row gy-4">
            {
              Sdata.map((item , index)=>{
                return(
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="/" class="btn btn-dark">{item.btn}</a>
                  </div>
                </div>
          </div>

                )
              })
            }
         
        </div>
      </div>
    </>
  )
}

export default Services
