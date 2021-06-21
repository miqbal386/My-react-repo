import React, { useState } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' ,
                   email: '',
                   message: ''
                  };


    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
  
    fetch('https://api.brainyrms.com/contact_us', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  render() {
return (
<div id="rgba-gradient1" class="container col-sm-12 rgba-gradient">
    <div id="rgba-gradient1" class="text-center text-white container" >

    <form onSubmit={this.handleSubmit}>
        <br></br>
        <br></br>
        <br></br>
        <h2 class="text-white text-center mb-3 mt-3">Contact us for a free consultation</h2>
        <br></br>
        <h5 class="text-white text-center mb-3 mt-3">Discover the benefits of integrating Brainy RMS into your competitive startegy. </h5>
        <br></br>

       <div class="row">
      <div class="md-form col-sm-6">
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" required class="form-control rounded-pill border border-info"/>
      </div>
     
      <div class="md-form col-sm-6">
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" required class="form-control rounded-pill border border-info"/>
      </div>
      </div> 
      <br></br>
      <br></br>
      <div class="md-form col-sm-12">
        <label htmlFor="message">Message</label>
        <textarea id="message" required class="form-control rounded-pill border border-info" rows="3"/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button class="text-white bg-danger rounded-pill border border-info" type="submit">Submit</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


       
  
      


    </form>

    </div>
    </div>
  );
};

onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}

handleSubmit(event) {
}
}



export default ContactForm;