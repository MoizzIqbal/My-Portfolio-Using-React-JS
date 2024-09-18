import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom'

import Cv from "../Components/moizz.pdf"
function Home() {
  const navigate = useNavigate();


  function Contact() {
    navigate("/contactus");
  }

  return (
    <div>
      <div className="background ">
        <div className="heading-content text-center align-middle ">
          <h5 className="fs-3 fw-bold text-light">Hello, I'm</h5>
          <h1 className=" fw-bold text-light">MOIZ IQBAL</h1>
          <p className="fs-3 text-light">AND THIS IS MY WORLD</p>
          <div className='d-flex align-content-center justify-content-center gap-2'>
            <a href={Cv} className='btn btn-dark cv'>
              Download CV
            </a>
            <button className='btn btn-dark' onClick={Contact}>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
