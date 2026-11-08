import React, { Component } from 'react'

import { Link } from "react-router-dom";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.inputRef = React.createRef();
        this.input2Ref = React.createRef();
        this.nav = React.createRef();
        this.navMenu = React.createRef();
      }
      toggleMenu = () =>{
        if(!this.state.showMenu) {
            this.inputRef.current.classList.add("open");
            this.input2Ref.current.classList.add("open");
            this.nav.current.classList.add("open");
            this.navMenu.current.classList.add("open");
            this.setState({
                showMenu: true
              });
          document.firstElementChild.classList.remove("animatedOut");
      } else {
            (this.inputRef.current).classList.remove("open");
            (this.input2Ref.current).classList.remove("open");
            this.nav.current.classList.remove("open");
            this.navMenu.current.classList.remove("open");
            this.setState({
                showMenu: false
        })
      }
  }
      handleClick = (e) => {
          e.target.ownerDocument.firstElementChild.classList.add("animatedOut");
      }
    render() {
        return (
        <>
            <header>
                <div className="container">
                    <div className="menu-btn" ref={this.inputRef} onClick={this.toggleMenu}>
                        <span className="menu-btn-burger" ref={this.input2Ref}></span>
                    </div>
                    <nav className="navbar" ref={this.nav}>
                    <div className="myPic"></div>
                        <ul ref={this.navMenu}>
                            <li onClick={this.handleClick}><Link to="/">Home</Link></li>
                            <li onClick={this.handleClick}><Link to="/about">About</Link></li>
                            <li onClick={this.handleClick}><Link to="/work">Work</Link></li>
                            <li><Link to="/contact"  className="active">Contact Me</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">
                <div className="header-logo">
                        <img src="https://res.cloudinary.com/dniyxgevz/image/upload/v1736842552/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo_2_ccsyw8.png" alt="header logo"/>
                    </div>
                    <div className="contact-text">
                        <h1>Contact <span>Me</span></h1>
                            <p>Reach me via:</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p><a href ="mailto: paulajibola6@gmail.com"><i className="fa fa-envelope" aria-hidden="true"><span> Email:</span></i> paulajibola6@gmail.com</a></p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p><a href="tel:+2348139132063"><i className="fa fa-phone" aria-hidden="true"><span> Mobile:</span></i> +234 813 913 2063</a></p>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="https://www.researchgate.net/profile/Paul-Ajibola" target="_blank" rel="noopener noreferrer"><i  data-aos="fade-down" data-aos-delay="200" className="fa fa-2x fa-book" aria-hidden="true"></i>Paul Ajibola</a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="https://www.linkedin.com/in/paul-ajibola-85181930b/" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="200" className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i><span>Ajibola Paul</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
