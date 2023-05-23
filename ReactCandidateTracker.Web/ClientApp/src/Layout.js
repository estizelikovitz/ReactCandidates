import React from 'react';
import { Link } from 'react-router-dom';
import { useCount } from './Context';


const Layout = (props) => {
    const { refusedCount, confirmedCount, pendingCount } = useCount();

    return (

        <>
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>@ViewData["Title"] - _3_02HMWK</title>
                <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="~/css/site.css" />
            </div>
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                        <div className="container">
                            <div className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Candidate Tracker</div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                                <ul className="navbar-nav flex-grow-1">

                                    <Link to='/' className='nav-link text-light'>
                                        <li className="nav-item">
                                            <div className="nav-link text-dark" >Home</div>
                                        </li>
                                    </Link>

                                    <Link to='/addcandidate' className='nav-link text-light'>
                                        <li className="nav-item">
                                            <div className="nav-link text-dark" >Add Candidate</div>
                                        </li>
                                    </Link>

                                    <Link to='/pending' className='nav-link text-light'>
                                        <li className="nav-item">
                                            <div className="nav-link text-dark" >Pending ({pendingCount})</div>
                                        </li>
                                    </Link>

                                    <Link to='/refused' className='nav-link text-light'>

                                        <li className="nav-item">
                                            <div className="nav-link text-dark" >Refused ({refusedCount})</div>
                                        </li>
                                    </Link>

                                    <Link to='/confirmed' className='nav-link text-light'>
                                        <li className="nav-item">
                                            <div className="nav-link text-dark" >Confirmed ({confirmedCount})</div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container">
                    <main role="main" className="pb-3">
                        {props.children}
                    </main>
                </div>

            </div>
        </>
    )
}
export default Layout;