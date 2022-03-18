/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useState } from 'react'

export default class Register extends Component {
    
  render() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <input type="text" className="form-control" 
                placeholder="Name" required
                onChange={e => setName(e.target.value)}/>
            <input type="email" className="form-control" 
                placeholder="Email Address" required
                onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="form-control" 
                placeholder="Password" required
                onChange={e => setPassword(e.target.value)}/>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
  }
}
