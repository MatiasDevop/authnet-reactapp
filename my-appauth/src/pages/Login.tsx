import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input type="email" className="form-control" 
                id="floatingInput" placeholder="Email address" />
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" 
                id="floatingPassword" placeholder="Password" />
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    )
  }
}
