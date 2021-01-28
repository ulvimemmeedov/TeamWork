import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import "../Asests/css/contact.css";
import "../Asests/css/contactFontsize.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faPencilAlt ,faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Container className="container">

                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            
                            <label htmlFor="name"><FontAwesomeIcon icon = {faUser} /> Ad Soyad</label>
                            <input type="text" placeholder="Ad Soyad *" required className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"> <FontAwesomeIcon icon = {faEnvelope}/> Email</label>
                            <input type="email" placeholder="Email *" required className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"> <FontAwesomeIcon icon = {faPencilAlt}/> Mesaj</label>
                            <input type="text" placeholder="Başlıq" className= "form-control"/>
                                <div className="div1"></div>
                             
                            <textarea className="form-control" required  placeholder=" Mesaj *" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger">Göndər</button>
                    </form>
                </Container>
                <Footer />
            </div>
        )
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();

    }
}
