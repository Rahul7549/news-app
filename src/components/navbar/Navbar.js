import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
apiKey=process.env.REACT_APP_NEWS_API_KEY;

// business entertainment general health science sports technology

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active"  to="/">General</Link>
                                <Link className="nav-link"  to="/entertainment">Entertainment</Link>
                                <Link className="nav-link"  to="/business">Business</Link>
                                <Link className="nav-link"  to="/health">Health</Link>
                                <Link className="nav-link"  to="/features">Features</Link>
                                <Link className="nav-link" to="/science">Science</Link>
                                <Link className="nav-link" to="/sports">Sports</Link>
                                <Link className="nav-link" to="/technology">Technology</Link>
                                
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
