import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const PageNotFound = () => {
    return (
        <div className="container-page-not-found">
            <h1 className="page-not-found">Page not found 404</h1>
          <Link to='/'> <button className="button-page-not-found">Go to home page</button></Link> 
        </div>
    )
}

export default PageNotFound