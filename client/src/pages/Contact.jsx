import React, { useState } from "react";
import axios from "axios";
import ContactForm from "../components/ContactForm";

// function Contact() {
//     document.title = "Contact Us | AnimeX";
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [msg, setMsg] = useState("");

//     function handleName(event) {
//         setName(event.target.value);
//     }
//     function handleEmail(event) {
//         setEmail(event.target.value);
//     }
//     function handleMsg(event) {
//         setMsg(event.target.value);
//     }

//     function handleSubmit(event){
//         axios.post('/contact', {
//             Name: name,
//             Email: email,
//             Message: msg 
//         })
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }

//   return (
//     <div>
//         <h5>Send Message</h5>
//         <div className="mt-4 inputs">
//             <input type="text" className="form-control" onChange={handleName} placeholder="Name" /> 
//             <input type="text" className="form-control" onChange={handleEmail} placeholder="Email" /> 
//             <textarea className="form-control" onChange={handleMsg} placeholder="Type your message" />
//             </div>
//         <div className="button mt-4 text-left"> 
//         <button className="btn btn-dark" onClick={handleSubmit}>Send</button> 
//         </div>
//     </div>
//   );
// }

// export default Contact;

function Contact() {
  return (
    <div>
      <ContactForm />
      <div className="back-img" />
    </div>
  )
}
export default Contact;