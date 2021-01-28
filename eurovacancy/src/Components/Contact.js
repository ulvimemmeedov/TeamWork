import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import "../Asests/css/contact.css"




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
              
                <div class="container">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Bizimlə əlaqə</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>Ismayilbey Gutgashinli St, Baku, Azerbaycan</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p>+994-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Social :</p>
            <div class="social-icons">
              <a href="www.facebook.com">
              <i class="fab fa-facebook-f"></i>
              </a>
              <a href="www.twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="www.instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="www.linkedin.com">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="" autocomplete="off">
            <h3 class="title">Əlaqə</h3>
            <div class="input-container">
              <input type="text" placeholder="Ad Soyad" name="name" required class="input" />
              <label for=""/>
             
            </div>
            <div class="input-container">
              <input type="email" placeholder="Email" name="email" required class="input" />
              <label for=""/>
              
            </div>
            <div class="input-container">
              <input type="text" placeholder="Mövzu" name="movzu" class="input" />
              <label for="" />
             
            </div>
            <div class="input-container textarea">
              <textarea name="message" placeholder="Mesaj" required class="input"></textarea>
              <label for="" />
             
            </div>
            <input type="submit" value="Göndər" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
                
                <Footer />
            </div>
        )
    }

    
}
