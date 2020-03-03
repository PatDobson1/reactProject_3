// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import { sendMail } from '../js/Functions'
// -----------------------------------------------------------------------------

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactTel: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        sendMail(this.state);
    }
    render(){
        return(
            <div className="content">
                <div className="contentInner">
                    <h2>Contact</h2>
                    <form name="contactUs" onSubmit={this.handleSubmit} id="contactForm">
                        <p>
                            <label>Name:</label>
                            <input type="text" name="contactName" value={this.state.contactName} onChange={this.handleChange} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Email:</label>
                            <input type="text" name="contactEmail" value={this.state.contactEmail} onChange={this.handleChange} />
                            <span>*</span>
                        </p>
                        <p>
                            <label>Telephone:</label>
                            <input type="text" name="contactTel" value={this.state.contactTel} onChange={this.handleChange} />
                        </p>
                        <p>
                            <label>Message:</label>
                            <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                            <span>*</span>
                        </p>
                        <p className="required">
                            <span>*</span> : Required information
                        </p>
                        <p id="emailErrorNote">
                            Please complete the required information
                        </p>
                        <p className="control">
                            <input type="submit" value="Send message" />
                        </p>
                        <p>Please note that emails from this form are sent to the address you enter in the 'Email' field</p>
                    </form>
                    <div id="emailThankYou">
                        <h2>Thank you for contacting Coding sample</h2>
                        <p>We aim to reply to all contacts within 3 working days</p>
                    </div>
                    <div id="emailError">
                        <h2>There's been an error sending your email</h2>
                        <p>Please refresh the page and try again</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
