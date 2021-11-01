import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Booking  from "./booking"

import {Growl} from 'primereact/growl';

class Authentication extends Component {
  constructor(){
    super();
  this.state = { name: '', email: '',hide:true}
  this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {


    console.log(this.state)
    if (this.state.name!=="" && this.state.email!==""){
      this.setState({hide:false})
      
      }
    else{
      
      this.growl.show({severity: 'error', summary: 'Denied', detail: 'Enter random name and emailid'});
 
      // this.growl.show({severity: 'success', summary: 'Enter', detail: 'Enter random name and emaiiiilid'});

    }




  } 

  render() {
    const { name, email } = this.state
    
    return (
      <div>
        <Growl ref={(el) => this.growl = el} />
        {this.state.hide?
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                  <Form.Button type="submit"  content='Submit02' />
                </Form.Group>
              </Form>
              :<Booking name ={name} email= {email} />
        }
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre> */}
      </div>
    )
  }
}

export default Authentication
