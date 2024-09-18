import React from 'react'
import pic from "../Images/back1.jpg"
import "./About.css"
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate = useNavigate()

  const contact = ()=>{
      navigate("/contactus")
  }
  return (
    <div>
      <h1 className='text-center fw-bold about'>About Me </h1>
      <hr className='w-50 mx-auto mt-3' />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={pic} className='pic' alt="" />
          </div>
          <div className="col-md-6 mt-5">
            <h2>Wanna Know Me?</h2>
            <p>
            Hi, I am Moiz Iqbal. I bring a passion for creating innovative and visually appealing websites that
deliver outstanding user experiences. My expertise lies in front-end development, where I excel in
HTML, CSS, and JavaScript, ensuring seamless integration of design and functionality. Additionally,
I am proficient in utilizing modern frameworks and libraries such as React.

            </p>

            <button className='btn btn-dark' onClick={contact}>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
