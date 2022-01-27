import React, { useState } from "react";
import axios from "axios";

function Contact() {
    document.title = "Contact Us | AnimeX";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }
    function handleEmail(event) {
        setEmail(event.target.value);
    }
    function handleMsg(event) {
        setMsg(event.target.value);
    }

    function handleSubmit(event){
        axios.post('/contact', {
            Name: name,
            Email: email,
            Message: msg 
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    

  return (
    <div className="wrapper">
    <div className="overlay">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9">
                <div className="contact-us text-center">
                    <h3>Contact Us</h3>
                    <p className="mb-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mt-5 text-center px-3">
                                <div className="d-flex flex-row align-items-center"> <span className="icons"><i className="fa fa-map-marker"></i></span>
                                    <div className="address text-left"> <span>Address</span>
                                        <p>461, Sugar camp, San jose, California, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-phone"></i></span>
                                    <div className="address text-left"> <span>Phone</span>
                                        <p>501 205 2929</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-envelope-o"></i></span>
                                    <div className="address text-left"> <span>Address</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center px-1">
                                <div className="forms p-4 py-5 bg-white">
                                    <h5>Send Message</h5>
                                    <div className="mt-4 inputs">
									 <input type="text" className="form-control" onChange={handleName} placeholder="Name" /> 
									 <input type="text" className="form-control" onChange={handleEmail} placeholder="Email" /> 
									 <textarea className="form-control" onChange={handleMsg} placeholder="Type your message" />
									 </div>
                                    <div className="button mt-4 text-left"> 
									<button className="btn btn-dark" onClick={handleSubmit}>Send</button> 
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Contact;
