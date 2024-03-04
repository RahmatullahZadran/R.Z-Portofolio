import React, { useState } from 'react';

function NavBar(props) {
    // Define your email address
    const emailAddress = "your.email@example.com";

    // Function to handle opening the default email application
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    // State to control the visibility of the contact form modal and submission status
    const [showContactModal, setShowContactModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = () => {
        // Your submission logic here, for now just set submitted to true
        setSubmitted(true);
    };

    return (
        <nav className="navbar navbar-dark bg-black navbar-expand-lg justify-content-center">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> Rahmatullah Zadran Portofolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active navbar-brand" aria-current="page" href="https://github.com/RahmatullahZadran" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a className="nav-link navbar-brand" href="https://www.linkedin.com/in/rahmatullah-zadran-10b8391a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="nav-link navbar-brand" href="#" onClick={handleEmailClick}>Email</a>
                        <button className="nav-link navbar-brand" onClick={() => setShowContactModal(true)}>Contact</button>
                        <a className="nav-link navbar-brand" href="/path/to/your/resume.pdf" download>Resume</a>
                    </div>
                </div>
            </div>

            {/* Contact Form Modal */}
            {showContactModal && (
                <div className="modal d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <div className="modal-dialog" role="document" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Form</h5>
                                <button type="button" className="close" onClick={() => setShowContactModal(false)} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {!submitted ? (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </>
                                ) : (
                                    <div className="alert alert-success" role="alert">
                                        Message submitted successfully!
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                {!submitted ? (
                                    <>
                                        <button type="button" className="btn btn-secondary" onClick={() => setShowContactModal(false)}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send</button>
                                    </>
                                ) : (
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowContactModal(false)}>Close</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
