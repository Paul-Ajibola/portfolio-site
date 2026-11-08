/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/about.css";

export default class About extends Component {
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
			<section id="about">
				<header>
					<div className="container">
						<div
							className="menu-btn"
							ref={this.inputRef}
							onClick={this.toggleMenu}>
							<span className="menu-btn-burger" ref={this.input2Ref}></span>
						</div>
						<nav className="navbar" ref={this.nav}>
							<ul ref={this.navMenu}>
								<li onClick={this.handleClick}>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about" className="active">
										About
									</Link>
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
				<main className="about-main">
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/dniyxgevz/image/upload/v1736842552/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo_2_ccsyw8.png"
								alt="header logo"
							/>
						</div>
						<div className="about row">
							<div className="about-text col-lg-12 col-md-12 col-12">
								<div className="aboutPic" data-aos="fade-right"></div>
								<h2 data-splitting data-aos="fade-right" data-aos-delay="50">
									About <span>Me</span>
								</h2>
								<p data-aos="fade-right" data-aos-delay="100">
									Artificial Intelligence <b>|</b> ML & DL <b>|</b> Data Science
									<b>|</b> Global Health <b>|</b> Epidemiology

								</p>
								<button className="button2">
									<a href="https://drive.google.com/file/d/1qXsVOY7DNekVzwwyc5SSt71HFJvFQSGf/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										download="PaulAJIBOLA_Resume.pdf">Download My Resume</a>
								</button>
								<button className="button2">
									<a href="https://paul-ajibola.netlify.app/work"
										rel="noopener noreferrer">See Project Section &#8594;</a>
								</button>
								<p data-aos="fade-right" data-aos-delay="100">
									<em>Hey there! &#x1F44B; </em>
								</p>
								<p data-aos="fade-right" data-aos-delay="100">
									It's great to have you here. I'm <b>Paul AJIBOLA</b>; an AI Engineer with a background in <b>Veterinary Medicine</b>
									<br></br>and a growing focus on <b>building</b> practical, relable AI systems.
									My journey began in Veterinary Medicine at <br></br>the University of Ibadan, Nigeria where
									I developed a foundation
									in <b>scientific reasoning, disease investigation <br></br>and evidence-based problem-solving</b>.
									My curiosity about data and technology gradually led me into Data Science, <br></br>Machine Learning, and AI Engineering.
									<br></br>
									Today, I build AI-Powered applications, intelligent agentic systems, machine learning models and
									data-driven systems. <br></br>I am constantly looking for ways to apply these technologies to solve global health challenges.
								</p>

								{/* <div className="bio">
									<h4 data-aos="fade-up" data-aos-delay="150">
										<span class="initial-letter">A Multidisciplinary</span> Perspective.
									</h4>
									<p data-aos="fade-up" data-aos-delay="250">
										{" "}
										<b><h6>Science, Data and AI &#128200; </h6></b>
									<b>Science:</b> Vet shaped how 
									</p>
									<p data-aos="fade-up" data-aos-delay="350">
									The HNG Tech internship program provided me a dynamic and enabling environment where I had the opportunity to 
									collaborate with a diverse, cross-functional team to develop and launch 
									two Minimum Viable Products (MVPs) namely; <a href="delve.fun" target="_black">Delve</a> and&nbsp;
									<a href="https://staging.nextjs.boilerplate.hng.tech/" target="_black">HNG Boilerplate</a>. 
									This hands-on experience allowed me to apply my knowledge, 
									fostering a deeper understanding of user needs, market dynamics, and the importance of 
									data-driven decision-making.
									</p>
									{/* <p data-aos="fade-up" data-aos-delay="450">
										My ultimate aspiration is to someday <b>become an AI product manager</b>. In this role, 
										I envision myself building and managing AI solutions that address real human problems. 
									</p> */}
								{/* </div> */}

								<div className="bio">
									<h4 data-aos="fade-up" data-aos-delay="150">
										<span class="initial-letter">My Skills </span>And Expertise.
									</h4>
									<h6 class="padding"><b>Core Technical Skill &#x1F4BB;</b></h6>
									<p data-aos="fade-up" data-aos-delay="250">
										<em> My competencies lie in: </em> </p>
									<div
										className="about-text col-lg-12 col-md-12 col-12"
										data-aos="fade-up" data-aos-delay="270">
										<button className="button">AI Engineering</button> <span>Transformers, LLMs, RAG, AI Agents, LangGraph, FastAPI, REST APIs, Finetuning</span> <br />
										<button className="button">Machine Learning</button> <span>Scikit-Learn, Supervised Learning, Unsupervised Learning, Model Evaluation, Feature Engineering</span> <br />
										<button className="button">Deep Learning & Computer Vision</button> <span>PyTorch, CNNS, Transfer Learning, Image Classification and Object Detection, Sequence Models</span> <br />
										<button className="button">Data Science</button> <span>Python, Pandas, NumPy, SQL, Exploratory Data Analyses, Statistical Analyses</span> <br />
										<button className="button">Tools & Deployment</button> <span>Git, GitHub, Docker, CI/CD, API deployment</span> <br />
										<button className="button">Research</button> <span>Quantitative and Qualitative Methodologies, Scientific Databases (JSTOR, PubMed), Technical Writing</span> <br />
										{/* <button className="button">End-to-End Product Lifecycle Mgt</button> 
										<button className="button">QA Testing</button>
										<button className="button">Stakeholder Management</button>
										<button className="button">Technical Writing & Documentation</button>
										<button className="button">Product Data Analytics & Metrics Tracking</button> */}
									</div>

									{/* <h6 data-aos="fade-up" data-aos-delay="350" class="padding"><b>Tools &#128295;</b></h6>
									<p data-aos="fade-up" data-aos-delay="250">
									<em> Here is a glimpse into my PM Toolbox: </em> </p>
									<div
									className="about-text col-lg-9 col-md-9 col-12"
									data-aos="fade-up" data-aos-delay="250">
										<button className="button">Project Management</button> <span>Asana, Jira, Trello, ClickUp, Confluence</span> <br/>
										<button className="button">Communication</button> <span>Slack, Plumble, Google Suite, Loom, Microsoft Teams, Discord</span> <br/>
										<button className="button">Analytics</button> <span>Google Analytics, Mixpanel, Hotjar</span> <br/>
										<button className="button">Design</button> <span>Figma, Figjam, Canva, Miro, Draw.io</span>
									</div> */}

									{/* <div className="button-container">
										<div className="tool-group">
											<button className="button">Project Management</button>
											<span>Asana, Jira, Trello, ClickUp, Confluence, Linear</span>
										</div>

										<div className="tool-group">
											<button className="button">Communication</button>
											<span>Slack, Plumble, Google Suite, Loom</span>
										</div>

										<div className="tool-group">
											<button className="button">Design</button>
											<span>Figma, Canva, Miro, Draw</span>
										</div>

										<div className="tool-group">
											<button className="button">Analytics</button>
											<span>Google Analytics, Hotjar</span>
										</div>
									</div>
									 */}

									{/* <h6 data-aos="fade-up" data-aos-delay="350" class="padding"><b>Others &#129513;</b></h6>
									<p data-aos="fade-up" data-aos-delay="250">
									<em> I am also adept at the following: </em> </p>
									<div
									className="about-text col-lg-12 col-md-12 col-12"
									data-aos="fade-up" data-aos-delay="250">
										<button className="button">Programming Languages</button> <span>HTML, CSS, Javascript (Intermediate), SQL, Python</span> <br/>
										<button className="button">Soft Skills</button> <span>Collaboration, Critical thinking, Leadership, Problem Solving, Business Acumen, Adaptability. </span> <br/>
									</div> */}
								</div>

								<div className="bio mb-5">
									<h4 data-aos="fade-up" data-aos-delay="150">
										{/* <span className= "initial-letter">Meet The Person </span>Beyind The Work */}
									</h4>
									{/* <h6 data-aos="fade-up" data-aos-delay="250" class="padding"><b>Beyond the Resume: Who am I beyond my work? &#127912;</b></h6> */}
									<p data-aos="fade-up" data-aos-delay="250">
										{/* <a
											href="https://hng.tech/internship"
											rel="noopener noreferrer"
											target="_black">
											HNG Tech
										</a>{" "} */}
										{/* <i>People often wonder if I'm an introvert or an extrovert. Honestly, I think it depends on the situation. I've come to realize that
										I'm an ambivert; meaning I have both introverted and extroverted tendencies.
										I take this mix of qualities as a unique strength because it helps me effortlessly thrive not only in collaborative environments,
										but also in situations where I am required to carry out projects independently; like in research.</i> */}
									</p>

									{/* <h6 data-aos="fade-up" data-aos-delay="350" class="padding"><b><span className= "initial-letter">The Values That Shape Me &#x1f331;</span></b></h6> */}

									{/* <p data-aos="fade-up" data-aos-delay="350">
										<i>Three core values shape and define who I am. They are excellence, a lifelong commitment to personal growth and balance. Excellence drives me to always strive 
										for the highest quality in everything I do, fueling in me a desire to continually commit to lifelong learning. 
										I also believe in finding harmony between work, personal life, and self-care. These three things form the core of my person.</i> 
									</p> */}

									{/* <h6 data-aos="fade-up" data-aos-delay="450" class="padding"><b><span className= "initial-letter">Outside Managing Products, The Things I Love to Do &#x2764;&#xfe0f;</span></b></h6> */}

									{/* <p data-aos="fade-up" data-aos-delay="450">
										<i>When I'm not managing products, I enjoy volunteering, reading, watching documentaries and biopic movies, teaching and journaling. 
										Occasionally, I also write songs. Other times, I just enjoy bingeing YouTube clips of Lionel Messi. Honestly, I think he is the best
										thing that ever happened to football. No offence, if you are a Ronaldo fan!</i>
									</p> */}
									<button className="button2">
										<a href="https://paul-ajibola.netlify.app/work"
											rel="noopener noreferrer">See Project Section &#8594;</a>
									</button>
								</div>
							</div>
							<div>
							</div>
						</div>
					</div>



					<div className="about-social">
						{/* <a
							href="https://web.facebook.com/paul.ajibola.397"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-facebook"
								aria-hidden="true"></i>
						</a> */}
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
					</div>
				</main>
			</section>
		);
	}
}
