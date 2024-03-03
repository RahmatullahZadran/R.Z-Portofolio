import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-black navbar-expand-lg justify-content-center">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> Rahmatullah Zadran Portofolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active navbar-brand" aria-current="page" href="#">GitHub</a>
                        <a className="nav-link navbar-brand" href="#">LinkedIn</a>
                        <a className="nav-link navbar-brand" href="#">Email</a>
                        <a className="nav-link navbar-brand" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
