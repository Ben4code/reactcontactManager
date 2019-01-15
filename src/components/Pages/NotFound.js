import React from 'react'
import {Link} from 'react-router-dom'


export default function NotFound() {
  return (
    <div className="text-center pt-5">
      <h1 className="display-2 text-danger">404</h1>
      <h3 className="display-4 "> Page Not Found</h3>
      <p className="lead">Sorry, the page you requested does not exist.</p>
        <Link to="/" className="btn btn-success">Return to home</Link>
    </div>
  )
}
