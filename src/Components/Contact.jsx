import  {React, useState } from 'react'
import "./Contact.css"

function Contact() {
  const [data, setData] = useState({Name : "", Email : "", Text : ""})

  function submit(e){
    e.preventDefault()
    console.log(data);
    

  
  }

  function handleCanged(e){
    const {name, value} = e.target; 

    setData((prev) => {
      return { ...prev, [name]: value }
    })
    
  }


  return (
    <div>
       <h1 className='text-center fw-bold contact'>Contact Us</h1>
      <hr className='w-50 mx-auto mt-3' />

      <form className='container w-50' onSubmit={submit}>
  <div className="mb-3">
    <label  className="form-label">Full Name: </label>
    <input type="text" className="form-control" name='Name' value={data.Name} onChange={handleCanged}/>

  </div>
  <div className="mb-3">
    <label className="form-label">Email address:</label>
    <input type="email" className="form-control" name='Email' value={data.Email} onChange={handleCanged}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Message:</label>
    <textarea className="form-control textarea" name='Text' value={data.Text} onChange={handleCanged} id="validationTextarea" placeholder="Please enter a message in the textarea." ></textarea>
  
  </div>

  <button type="submit" className="btn btn-dark submit d-flex">Submit</button>
</form>

    </div>
  )
}

export default Contact
