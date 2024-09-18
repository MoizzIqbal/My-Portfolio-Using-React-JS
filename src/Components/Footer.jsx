import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
 
 <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
       
      </section>
    
    
      <section className="">
        <div className="container-fluids text-center text-md-start mt-5">
      
          <div className="row mt-3">
          
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i><NavLink to="/">Moiz Iqbal</NavLink>
              </h6>
              <p>
                Available for Job.
              </p>
            </div>
         
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
              <h6 className="text-uppercase fw-bold mb-4 text-dark">
               Services
              </h6>
              <p>Web-Developer</p>
              <p>Web-Designer</p>
              <p>E-Commrece Websites</p>
              <p> Blog Websites</p>
            </div>
       
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
              <h6 className="text-uppercase fw-bold mb-4 text-dark">
                Follow Us
              </h6>
    
              <p>
                <a href="https://www.instagram.com/itx__moizz?igshid=ZGNjOWZkYTE3MQ==" className="text-reset"><i className="fab fa-instagram"></i> Itx__moizz</a>
              </p>
              <p>
                <a href="#!" className="text-reset"><i className="fab fa-whatsapp"></i> 0309-9990802</a>
              </p>
              <p>
                <a href="https://github.com/MoizzIqbal" target="_blank" className="text-reset"><i className="fab fa-github"></i> MoizzIqbal</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/moiziqbal1/" target="_blank" className="text-reset"><i className="fab fa-linkedin"></i>  moiziqbal1</a>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
              <h6 className="text-uppercase fw-bold mb-4 text-dark">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Lahore</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                moiziqbal302@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> 0309-9990802</p>
              <p><i className="fas fa-whatsapp me-3"></i> 0306-4492925</p>
            </div>
    
          </div>
         
        </div>
      </section>
      
      <div className="text-center p-4 container-fluid" >
        © 2024 <span><a href="index.html" className="fw-bold">Moiz Iqbal</a></span>
    
      </div>
  
    </footer>

    </div>
  )
}

export default Footer
