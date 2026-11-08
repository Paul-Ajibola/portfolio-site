/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};
		this.inputRef = React.createRef();
		this.input2Ref = React.createRef();
		this.nav = React.createRef();
		this.navMenu = React.createRef();
	}
	toggleMenu = () => {
		if (!this.state.showMenu) {
			this.inputRef.current.classList.add("open");
			this.input2Ref.current.classList.add("open");
			this.nav.current.classList.add("open");
			this.navMenu.current.classList.add("open");
			this.setState({
				showMenu: true,
			});
			document.firstElementChild.classList.remove("animatedOut");
		} else {
			this.inputRef.current.classList.remove("open");
			this.input2Ref.current.classList.remove("open");
			this.nav.current.classList.remove("open");
			this.navMenu.current.classList.remove("open");
			this.setState({
				showMenu: false,
			});
		}
	};
	handleClick = (e) => {
		e.target.ownerDocument.firstElementChild.classList.add("animatedOut");
	};
	render() {
		return (
			<>
				<header>
					<div className="container">
						<div
							className="menu-btn"
							ref={this.inputRef}
							onClick={this.toggleMenu}>
							<span className="menu-btn-burger" ref={this.input2Ref}></span>
						</div>
						<nav className="navbar" ref={this.nav}>
							<div className="myPic"></div>
							<ul ref={this.navMenu}>
								<li>
									<Link to="/" className="active">
										Home
									</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/about">About</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/work">Work</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/contact">Contact Me</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main className="home-main">
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/dniyxgevz/image/upload/v1736842552/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo_2_ccsyw8.png"
								alt="header logo"
							/>
						</div>
						<div className="home">
							<div className="home-text line1">
								<h1 data-aos="fade-left" data-aos-delay="0">
									H
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="100">
									i
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="150">
									!
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="200">
									 &nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="250">
									M
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="300">
									y&nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="350">
									n
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="400">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="450">
									m
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="500">
									e&nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="550">
									i
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="600">
									s
								</h1>
							</div>
							<div className="home-text line2">
								<h1 data-aos="fade-left" data-aos-delay="750">
									P
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="800">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="850">
									u
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="900">
									l&nbsp;
								</h1>
								<div className="home-text lastName">
									<h1 data-aos="fade-left" data-aos-delay="950">
										A
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1000">
										J
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1050">
										I
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1100">
										B
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1150">
										O
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1200">
										L
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1250">
										A
									</h1>
								</div>
							</div>
							<div className="home-text line3">
								<h1 data-aos="fade-left" data-aos-delay="1300">AI | ML</h1> &nbsp;
								<h1 data-aos="fade-left" data-aos-delay="1300">
									E
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1350">
									n
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1400">
									g
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1450">
									i
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1500">
									n
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1550">
									e
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1600">
									e
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1650">
									r
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1700">
									
								</h1>
								&nbsp;
								{/* AI/ML SVG Icon inserted right here */}
                                <h1 data-aos="fade-left" data-aos-delay="1750" style={{ display: "inline-flex", alignItems: "center", verticalAlign: "middle", marginLeft: "8px" }}>
                                    <svg width="42" height="42" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <defs>
                                        <linearGradient id="orange-ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor="#FFA133" />
                                          <stop offset="100%" stopColor="#E65100" />
                                        </linearGradient>
                                        <linearGradient id="orange-ml-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor="#FF7043" />
                                          <stop offset="100%" stopColor="#D84315" />
                                        </linearGradient>

                                        {/* Inline Keyframe Animations */}
                                        <style>
                                          {`
                                            @keyframes pulseGlow {
                                              0% { filter: drop-shadow(0 0 2px rgba(255, 112, 67, 0.4)); transform: scale(1); }
                                              50% { filter: drop-shadow(0 0 8px rgba(255, 161, 51, 0.9)); transform: scale(1.03); }
                                              100% { filter: drop-shadow(0 0 2px rgba(255, 112, 67, 0.4)); transform: scale(1); }
                                            }
                                            @keyframes synapseFlash {
                                              0% { opacity: 0.3; }
                                              50% { opacity: 1; r: 5.5px; }
                                              100% { opacity: 0.3; }
                                            }
                                            .animated-brain {
                                              animation: pulseGlow 3s ease-in-out infinite;
                                              transform-origin: center;
                                            }
                                            .synapse-node-1 { animation: synapseFlash 2s ease-in-out infinite; }
                                            .synapse-node-2 { animation: synapseFlash 1.5s ease-in-out infinite 0.5s; }
                                            .synapse-node-3 { animation: synapseFlash 2.2s ease-in-out infinite 1s; }
                                          `}
                                        </style>
                                      </defs>

                                      <g className="animated-brain">
                                        {/* Left AI Hemisphere */}
                                        <path d="M 95 20 C 70 20, 30 35, 25 65 C 15 75, 10 95, 20 115 C 15 130, 25 155, 45 165 C 60 175, 85 175, 95 180 Z" 
                                              stroke="url(#orange-ai-grad)" strokeWidth="4" strokeLinecap="round" fill="none" />
                                        <path d="M 40 70 H 60 V 90 H 70" stroke="url(#orange-ai-grad)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                                        <circle cx="40" cy="70" r="3" fill="#FFA133" />
                                        <path d="M 32 100 H 50 V 110 H 70" stroke="url(#orange-ai-grad)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                                        <circle cx="32" cy="100" r="3" fill="#FFA133" />
                                        <path d="M 45 135 H 62 V 125 H 70" stroke="url(#orange-ai-grad)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                                        <circle cx="45" cy="135" r="3" fill="#FFA133" />
                                        <path d="M 75 35 V 55 H 82 V 75" stroke="url(#orange-ai-grad)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                                        <circle cx="75" cy="35" r="3" fill="#FFA133" />
                                        <path d="M 75 165 V 145 H 82 V 125" stroke="url(#orange-ai-grad)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                                        <circle cx="75" cy="165" r="3" fill="#FFA133" />

                                        {/* AI CPU Chip */}
                                        <rect x="68" y="77" width="26" height="46" rx="5" fill="#BF360C" stroke="url(#orange-ai-grad)" strokeWidth="2.5" />
                                        <line x1="63" y1="85" x2="68" y2="85" stroke="url(#orange-ai-grad)" strokeWidth="2" />
                                        <line x1="63" y1="100" x2="68" y2="100" stroke="url(#orange-ai-grad)" strokeWidth="2" />
                                        <line x1="63" y1="115" x2="68" y2="115" stroke="url(#orange-ai-grad)" strokeWidth="2" />
                                        <text x="81" y="106" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">AI</text>

                                        {/* Center Divider */}
                                        <line x1="100" y1="22" x2="100" y2="178" stroke="#FF8A65" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

                                        {/* Right ML Hemisphere */}
                                        <path d="M 105 20 C 130 20, 170 35, 175 65 C 185 75, 190 95, 180 115 C 185 130, 175 155, 155 165 C 140 175, 115 175, 105 180 Z" 
                                              stroke="url(#orange-ml-grad)" strokeWidth="4" strokeLinecap="round" fill="none" />
                                        <g stroke="url(#orange-ml-grad)" strokeWidth="1.8" opacity="0.85">
                                          <line x1="118" y1="45" x2="145" y2="35" />
                                          <line x1="145" y1="35" x2="170" y2="55" />
                                          <line x1="118" y1="45" x2="135" y2="70" />
                                          <line x1="145" y1="35" x2="135" y2="70" />
                                          <line x1="170" y1="55" x2="160" y2="85" />
                                          <line x1="135" y1="70" x2="160" y2="85" />
                                          <line x1="160" y1="85" x2="178" y2="110" />
                                          <line x1="135" y1="70" x2="145" y2="120" />
                                          <line x1="145" y1="120" x2="178" y2="110" />
                                          <line x1="145" y1="120" x2="168" y2="145" />
                                          <line x1="118" y1="155" x2="145" y2="120" />
                                          <line x1="118" y1="155" x2="140" y2="165" />
                                          <line x1="140" y1="165" x2="168" y2="145" />
                                        </g>
                                        <g fill="#FFFFFF">
                                          <circle className="synapse-node-1" cx="118" cy="45" r="4" />
                                          <circle cx="145" cy="35" r="4" />
                                          <circle className="synapse-node-2" cx="170" cy="55" r="4" />
                                          <circle cx="135" cy="70" r="4.5" />
                                          <circle className="synapse-node-3" cx="160" cy="85" r="4" />
                                          <circle cx="178" cy="110" r="4" />
                                          <circle className="synapse-node-1" cx="145" cy="120" r="4.5" />
                                          <circle cx="168" cy="145" r="4" />
                                          <circle className="synapse-node-2" cx="118" cy="155" r="4" />
                                          <circle cx="140" cy="165" r="4" />
                                        </g>
                                        <text x="119" y="107" fill="#FFCCBC" fontFamily="sans-serif" fontWeight="900" fontSize="20" letterSpacing="1">ML</text>
                                      </g>
                                    </svg>
                                </h1>
								{/* <h1 data-aos="fade-left" data-aos-delay="1800">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1850">
									g
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1900">
									e
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1950">
									r
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="2000">
									.
								</h1> */}
							</div>
						</div>
                        <p className="mt-4" data-aos="fade" data-aos-delay="2100">
                      	Welcome to my portfolio page! 
                        </p>

                        <em data-aos="fade-up" data-aos-delay="2100">
							"I am an AI Engineer with a background in Veterinary Medicine, 
                        </em>
						&nbsp;
						
						<em data-aos="fade-up" data-aos-delay="2200">
							interested in developing intelligent systems 
                        </em>
						<br/>
						&nbsp;
						<em data-aos="fade-up" data-aos-delay="2300">
							that solve practical problems across healthcare, scientific research and global development"
                        </em>
						
						<div className="get-started">
							<Link to="/about" data-aos="fade" data-aos-delay="2500">
								Get Started <i className="fa fa-arrow-right"></i>
							</Link>
						</div>
						<div className="home-social">
							<a
								href="https://www.linkedin.com/in/paul-ajibola-85181930b/"
								target="_blank"
								rel="noopener noreferrer">
								<i
									data-aos="fade-down"
									data-aos-delay="200"
									className="fa fa-linkedin-square"
									aria-hidden="true"></i>
							</a>
							<a
							href="https://x.com/Product_Maven2?t=LBOrdx0ZZ_Un5gnAKlrYag&s=03"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-twitter-square"
								aria-hidden="true"></i>
						</a>
						<a
							href="https://www.github.com/Paul-Ajibola/"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-github-square"
								aria-hidden="true"></i>
						</a>
						<a
							href="https://www.researchgate.net/profile/Paul-Ajibola"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-book"
								aria-hidden="true"></i>
						</a>
							<footer data-aos="fade-down" data-aos-delay="2700">
								&copy; Copyright 2026
							</footer>
						</div>
					</div>
				</main>
			</>
		);
	}
}
