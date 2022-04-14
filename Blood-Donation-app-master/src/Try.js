import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Try extends Component {
    constructor() {
        super();


        this.state = {
            Email: '',
            Password: '',
            status:  ''

        }
        this.handlechange = this.handlechange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    handlechange(event) {
        this.setState({
            [event.target.name]: event.target.value
           })
    }
    submitHandler(event) {
        event.preventDefault()
        fetch('http://localhost:4000/log', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Email": this.state.Email,
                'Password': this.state.Password
            }
            )
        })
        .then(res => res.text()).then(res => this.setState({status:res}))
        
        localStorage.setItem('token',this.state.status)
    }
    Authenticated(){

        const token = localStorage.getItem('token')
            return token && token.length>10
    }


    render() {
        const isAuth = this.Authenticated()
        return (
            <div>
                {isAuth ? <Redirect to = {{pathname : '/Regform'}}/> : (
                    <div>
                     Email:<input type="Email" name="Email" value={this.state.Email} onChange={this.handlechange}/><br></br><br></br>
                     Password:< input type="Password" name="Password" value={this.state.Password} onChange={this.handlechange}/><br></br>
                     <button type='button' onClick={this.submitHandler}>submit</button>
                     {this.state.status}
                     </div>
                 ) }
                
              </div> 
        );
    }
}

export default Try;
