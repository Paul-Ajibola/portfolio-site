/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/work.css";

export default class Work extends Component {
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
			<div>
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
								<li onClick={this.handleClick}>
									<Link to="/">Home</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/work" className="active">
										Work
									</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/contact">Contact Me</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main>
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/dniyxgevz/image/upload/v1736842552/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo_2_ccsyw8.png"
								alt="header logo"
							/>
						</div>
					</div>
					<div className="container skills-text">
						<div className="row section-1">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="header">
									<h2>
										Let's <span>Explore</span> My <span>Work</span>
									</h2>
								</div>
								<button className="button2">
									<a href="https://paul-ajibola.netlify.app/contact"
										rel="noopener noreferrer">See Contact Me Section &#8594;</a>
								</button>
								<p>
									Welcome to my project showcase! <br />Here, you'll find a selection
									of AI and ML projects that I have built.
									{" "}
									Each work reflects my passion to use these technologies to provide solutions.
									Enjoy your time here as you explore these projects{" "}

									{/* <a
										href="https://hng.tech/internship"
										rel="noopener noreferrer"
										target="_black">
										HNG Tech
									</a> */}
									{" "}
								</p>
								<hr />
								<p>
									{" "}
									<b>&#9888; Most projects are deployed on Render for free. It takes about 10 - 15 seconds to
										start up and become active after periods of dormancy </b>{" "}
								</p>

								{/* <p>
								I'm passionate about creating products that truly make 
								a difference; products that solve real problems and delight our users. 
								I invite you to explore my work and see how I turn user needs into 
								impactful solutions. Let's dive in!
								</p> */}
							</div>
						</div>

						<div className="project">
							<h2>
								Sele<span>cted</span> <span>Proj</span>ects
							</h2>

							<div className="row">


								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/OIP.jpeg" alt="project" />
											<div className="project-links">
												<a
													href="https://ccpz.ui.edu.ng/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Visit CCPZ, UI
												</a>
											</div>
										</div>
										<h5>
											<strong>
												Clinical Records AI-Assisted Digitization (Ongoing)
											</strong>
										</h5>
										<p>
											Designing an OCR-based AI-assisted digitization system for clinical records at the University of Ibadan Teaching Hospital (VTH, UI).
											The system is designed to automate the digitization of clinical records, improving efficiency and accuracy in record-keeping.
										</p>
										<p>
											This is a part of the Centre for Control and Prevention of Zoonoses (CCPZ) project at the University of Ibadan, Nigeria.
											The project is aimed at improving the management of clinical records and enhancing the overall veterinary healthcare delivery system.

											{/* &nbsp;As an active contributor of the PM team, I was involved in <strong> researching key market opportunities
											and challenges, defining the product vision and strategy, determining technical specifications, and collaborating
											with the various technical teams </strong>to develop, test and launch the Delve MVP.  */}
										</p>

										<p className="tech">
											<strong>Tools</strong>
											<button className="button">OpenCV</button>
											<button className="button">Tesseract OCR</button>
											<button className="button">Python</button>
											<button className="button">FastAPI</button>
											<button className="button">Docker</button>
											<button className="button">Postgres</button>
											<button className="button">Computer Vision</button>
											<button className="button">Docker</button>
											<button className="button">Data Quality Assurance</button>
										</p>
									</div>
								</div>


								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/chest-x-ray.png" alt="project" />
											<div className="project-links">
												<a
													href="https://covid-19-chest-x-ray-classifier-model.onrender.com/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Visit X-Ray Classifier
												</a>
											</div>
										</div>
										<h5>
											<strong>
												X-Ray Classifier (COVID-19 Detection Model)
											</strong>
										</h5>
										<p>
											A multiclass chest X-ray classifier built with DenseNet-121 in PyTorch, benchmarked against ResNet-18. It classifies images into COVID, Lung Opacity, Normal, and Viral Pneumonia and is served via a FastAPI REST API with Pydantic validation.
										</p>
										<p>
											I developed and trained the DenseNet-121 model, evaluated it against ResNet-18, built the FastAPI REST API with Pydantic validation, containerized with Docker, automated testing with pytest and Ruff linting, handled image preprocessing, and deployed via GitHub Actions CI/CD to Render.
										</p>
										<p className="tech">
											<strong>Tools</strong>
											<button className="button">PyTorch</button>
											<button className="button">ResNet-18</button>
											<button className="button">DesNet-121</button>
											<button className="button">FastAPI</button>
											<button className="button">Docker</button>
											<button className="button">CI/CD</button>
											<button className="button">Computer Vision</button>
											<button className="button">Transfer Learning</button>
											<button className="button">Deployment (Render)</button>
										</p>
									</div>
								</div>

								<hr />

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/diabetes-predictor.png" alt="project" />
											<div className="project-links">
												<a
													href="https://diabetes-predictor-1-jwsu.onrender.com/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Diabetes Progression Predictor
												</a>
											</div>
										</div>
										<h5>
											<strong>Diabetes Progression Predictor</strong>
										</h5>
										<p>
											A production-grade ML web app predicting diabetes disease progression one year post-baseline using ten physiological and serum metrics. Built with FastAPI, Scikit-learn Random Forest regressor, vanilla HTML/CSS/JS, Docker, GitHub Actions CI/CD, and full Pydantic validation.
										</p>
										<p>
											I built the FastAPI REST API with Pydantic validation, trained a Scikit-learn Random Forest regression model, vibe-coded a vanilla HTML/CSS/JS frontend with dark mode and progression scale, containerized with Docker Compose, and fully automated testing and CI/CD via GitHub Actions.
										</p>

										<p className="tech">
											<strong>Tools</strong>
											{/* <button className="button">FastAPI</button> */}
											<button className="button">FastAPI</button>
											<button className="button">Scikit-Learn</button>
											<button className="button">Random Forest</button>
											<button className="button">Docker</button>
											<button className="button">Pytest</button>
											<button className="button">Deployment (Render)</button>
											<button className="button">CI/CD</button>
											{/* <button className="button">Deployed (Render)</button> */}
										</p>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/epi-spread.png" alt="project" />
											<div className="project-links">
												<a
													href="https://epispread-game.onrender.com/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													EpiSpread Game
												</a>
											</div>
										</div>
										<h5>
											<strong>EpiSpread Game (Outbreak Simulation)</strong>
										</h5>
			<p>
				A grid-based epidemic simulation game modeling disease spread, resource management, and outbreak containment. Built as an AI-assisted simulation and gamification tool to demonstrate disease outbreak response using Python with grid engine and full web UI.
			</p>
			<p>
				I designed the grid-based epidemic simulation engine, implemented disease spread modeling and resource management mechanics, leveraged AI-coding agents throughout development, and conducted unit testing to ensure reliable outbreak containment gameplay mechanics.
			</p>
			{/* 
										<p>
											The Telex 1.0 App is a solution that uses AI-powered agents to streamline team
											communication by reducing distractions and automating repetitive tasks. Like slack,
											except that it is a more advanced alternative, Telex 1.0 allows clear communication alongside monitoring functions: which
											include application performance, cloud monitoring, database monitoring, log analysis, webhook testing and uptime monitoring.
										</p>
										<p>
											As one of the product managers in a team of product managers, I was <b>responsible for versioning
												the features </b>that make up the product. Additionally, I was collaboratively <b>responsible for developing and managing
													the PRD and product backlog </b>for the development of Telex 1.0.
										</p>
		 */}
			
										<p className="tech">
											<strong>Tools</strong>
											{/* <button className="button">FastAPI</button> */}
											<button className="button">Python</button>
											<button className="button">Agentic Coding</button>
											<button className="button">AGENT.md</button>
											<button className="button">DESIGN.md</button>
											<button className="button">Claude Code</button>
											<button className="button">Deployment (Render)</button>
											{/* <button className="button">CI/CD</button> */}
											{/* <button className="button">Deployed (Render)</button> */}
										</p>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/image.png" alt="project" />
											<div className="project-links">
												<a
													href="https://mental-health-classifier-nlp-2.onrender.com/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Mental Health Classifier
												</a>
											</div>
										</div>
										<h5>
											<strong>Mental Health Classifier</strong>
										</h5>
										<p> </p>
			<p>
				A text classification research demo labeling text as 0 or 1 using TF-IDF and Multinomial Naive Bayes. Built with FastAPI and Streamlit, exposing /health and /predict endpoints. Not a diagnostic or clinical risk assessment tool.
			</p>
			<p>
				I trained the TF-IDF and Multinomial Naive Bayes text classification pipeline, built the FastAPI REST API with /health and /predict endpoints, developed the Streamlit frontend interface, handled model serialization with joblib, and implemented input validation for safe text classification output.
			</p>
			{/* 
											DryKlin is a mobile app that helps users manage their laundry needs from a phone.
											It simplifies the entire process by allowing for scheduling of pick-up and drop-off times,
											offering different services like wash-and-fold or dry cleaning, and enabling order tracking.
											The app also includes secure payment options and a simple way to contact customer support,
											making it a smart solution for getting laundry done.
										</p>
										<p>
											As a product manager, I worked with stakeholders to <b>set the product vision and prioritize features</b> for the DryKlin mobile app.
											I also <b>analyzed user feedback to guide product development </b> and
											<b>collaborated with UI/UX and development teams to deliver the MVP.</b>
										</p>
		 */}
										<p className="tech">
											<strong>Tools</strong>
											{/* <button className="button">FastAPI</button> */}
											<button className="button">Sequence Models (GRU, RNN, LSTM)</button>
											<button className="button">SVM, Naive Bayes</button>
											<button className="button">NLP</button>
											<button className="button">Random Forest</button>
											<button className="button">Docker</button>
											<button className="button">Pytest</button>
											<button className="button">CI/CD</button>
											{/* <button className="button">Deployed (Render)</button> */}
										</p>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/RAG.png" alt="project" />
											<div className="project-links">
												<a
													href="https://github.com/Paul-Ajibola/compliance-and-policy-copilot-rag-system"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Visit Co-Pilot RAG System
												</a>
											</div>
										</div>
										<h5>
											<strong>Policy Co-pilot RAG System</strong>
										</h5>
			<p>
				A retrieval-augmented policy question-answering application using Next.js, FastAPI, and pgvector with dense and full-text search. It answers user policy questions with citations when confidence thresholds are met and escalates low-confidence questions instead of providing answers.
			</p>
			<p>
				I built the FastAPI backend with retrieval and reranking, integrated pgvector for vector search, vibe-coded the Next.js, React, TypeScript frontend, implemented confidence gating and citation generation, handled user feedback collection, and configured Gemini and Groq LLM providers for answer generation.
			</p>
			{/* 
										<p>
											The Telex 1.0 App is a solution that uses AI-powered agents to streamline team
											communication by reducing distractions and automating repetitive tasks. Like slack,
											except that it is a more advanced alternative, Telex 1.0 allows clear communication alongside monitoring functions: which
											include application performance, cloud monitoring, database monitoring, log analysis, webhook testing and uptime monitoring.
										</p>
										<p>
											As one of the product managers in a team of product managers, I was <b>responsible for versioning
												the features </b>that make up the product. Additionally, I was collaboratively <b>responsible for developing and managing
													the PRD and product backlog </b>for the development of Telex 1.0.
										</p>
		 								*/}
										<p className="tech">
											<strong>Stack</strong>
											{/* <button className="button">FastAPI</button> */}
											<button className="button">Python</button>
											<button className="button">RAG</button>
											<button className="button">LLM</button>
											<button className="button">Re-Ranking</button>
											<button className="button">Evaluation</button>
											<button className="button">LLM-as-a-Judge</button>
											<button className="button">Deployment (Render)</button>
											{/* <button className="button">Deployed (Render)</button> */}
										</p>
									</div>
								</div>



								{/* support triage */}
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/support triage agent.png" alt="project" />
											<div className="project-links">
												<a
													href="https://support-triage-agent-suhw.onrender.com/"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Visit Support Triage Project
												</a>
											</div>
										</div>
										<h5>
											<strong>Support Triage Agent</strong>
										</h5>
			<p>
				A support-ticket triage system using FastAPI, LangGraph, and fine-tuned Llama 3 8B. It screens tickets for prompt injection, classifies intent and urgency, and generates secure customer-facing responses via LangGraph.
			</p>
			<p>
				I built FastAPI REST API with LangGraph state machine, implemented LLM security guardrails and prompt-injection detection, integrated fine-tuned Llama 3 8B classifier, configured PostgreSQL and Redis checkpointing, and developed multi-turn conversation state management for support ticket triage.
			</p>
			{/* 
										<p>
											The Telex 1.0 App is a solution that uses AI-powered agents to streamline team
											communication by reducing distractions and automating repetitive tasks. Like slack,
											except that it is a more advanced alternative, Telex 1.0 allows clear communication alongside monitoring functions: which
											include application performance, cloud monitoring, database monitoring, log analysis, webhook testing and uptime monitoring.
										</p>
										<p>
											As one of the product managers in a team of product managers, I was <b>responsible for versioning
												the features </b>that make up the product. Additionally, I was collaboratively <b>responsible for developing and managing
													the PRD and product backlog </b>for the development of Telex 1.0.
										</p>
		 */}
										<p className="tech">
											<strong>Tools</strong>
											{/* <button className="button">FastAPI</button> */}
											<button className="button">Python</button>
											<button className="button">LangGraph</button>
											<button className="button">Redis</button>
											<button className="button">LLM Finetuning</button>
											<button className="button">LLM Serving</button>
											<button className="button">Docker</button>
											<button className="button">System Design</button>
											<button className="button">Deployment (Render)</button>
											{/* <button className="button">CI/CD</button> */}
											{/* <button className="button">Deployed (Render)</button> */}
										</p>
									</div>
								</div>

								


								{/* Template */}
								{/* <div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="img/Project2.png" alt="project" />
											<div className="project-links">
												<a
													href="link to product"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Link Title
												</a>
											</div>
										</div>
										<h3>
											<strong>Project Title</strong>
										</h3>
										<p>
											Product Overview
										</p>
										<p>
											My Contributions
										</p>
										<p className="tech">
											<strong>Tools:</strong>
											<button>Tool 1</button>
											<button>Tool 2</button>
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>







					{/* <div className="container skills-text2"> */}
					{/* <div className="row section-1"> */}
					{/* <div className="col-lg-9 col-md-9 col-12"> */}
					{/* <div className="header"> */}
					{/* <h2> */}
					{/* Product <span>Teardown</span> & <span>More</span> */}
					{/* </h2> */}
					{/* </div> */}
					{/* <p>This section showcases my passion for understanding products at a deeper level. */}
					{/* Beyond building products, I believe in constantly learning from existing ones. This section highlights my <b>analytical and critical */}
					{/* thinking skills</b> through a collection of in-depth analyses of successful products presented as product teardowns. Here, you will also find some of my */}
					{/* competitive analyses, market research reports, and other technical */}
					{/* documents.</p> */}
					{/* </div> */}

					{/* <div className="project">
							<h2>
								Sele<span>cted</span> <span>Proj</span>ects
							</h2>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/Kuda.PNG" alt="project" />
											<div className="project-links">
												<a
													href=""
													title="visit Kuda App Teardown"
													target="_blank"
													rel="noopener noreferrer">
													Visit Kuda Bank App Product Teardown
												</a>
											</div>
										</div>
										<h5>
											<strong>
												Kuda Bank App
											</strong>
										</h5>
									

										
									</div>
								</div>

							</div>

						</div>

								<hr />
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="/img/Fitbit.PNG" alt="project" />
											<div className="project-links">
												<a
													href="https://https://staging.nextjs.boilerplate.hng.tech/about-us"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Visit Fitbit Product Teardown
												</a>
											</div>
										</div>
										<h5>
											<strong>Fitbit Versa 2</strong>
										</h5>
										<p>
											The HNG Tech Boilerplate (MVP) is a standardized framework containing
											ready-made foundational code structures that help streamline
											the development process of software applications. 
										</p>
										<p>
											I was responsible,
											 as part of a team of product managers, for 
											conducting a comprehensive market research to ascertain the need for
											and economic potentials of the product.
											 I also contributed in <strong>facilitating
											agile processes for the product development by creating user stories and
											prioritizing the backlog, aligning project goals with stakeholders'
											expectations.</strong> {" "}

											These contributions led to identifying a 30% market gap that the product can fill, 
											a 15% reduction in project development time, 40% improvement in project delivery efficiency,
											and a 100% functional and scalable boilerplate.
										</p>
		
										<p className="tech">
											<strong>Tools:</strong>
											<button className="button">Jira</button>
											<button className="button">Linear</button>
											<button className="button">Notion</button>
											<button className="button">Figma</button>
											<button className="button">Github</button>
											<button className="button">Google Workspace (Docs, Slides, Sheets)</button>
											<button className="button">Slack</button>
										</p>
									</div>
								</div>

					</div>
						 */}
					{/* <div className="project"> */}
					{/* <h2> */}
					{/* Sele<span>cted</span> <span>Sam</span>ples */}
					{/* </h2> */}
					{/* <div className="row"> */}
					{/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
					{/* <div className="project-item"> */}
					{/* <div className="project-img"> */}
					{/* <img src="img/kuda.PNG" alt="project" /> */}
					{/* <div className="project-links"> */}
					{/* <a */}
					{/* href="https://drive.google.com/file/d/1eKvMvVs65m735D1qpr_nrgxHdlJ1v_oo/view?usp=sharing" */}
					{/* title="visit project" */}
					{/* target="_blank" */}
					{/* rel="noopener noreferrer"> */}
					{/* Visit Kuda App (Product Teardown) */}
					{/* </a> */}
					{/* </div> */}
					{/* </div> */}
					{/* <h5> */}
					{/* <strong> */}
					{/* Kuda Bank App (Product Teardown) */}
					{/* </strong> */}
					{/* </h5> */}
					{/* <p> */}
					{/* Kuda is a Nigerian-based, digital-only bank that provides a mobile-first banking experience. */}
					{/* Launched in 2019, Kuda differentiates itself by offering free banking services and a fully */}
					{/* digital platform, making it highly accessible to young, tech-savvy Nigerians. */}
					{/* </p> */}
					{/* <p> */}
					{/* My goal in this product teardown was to analyze the Kuda Bank app */}
					{/* by <b>examining its features, target audience, user experience, competitors, and growth opportunities, */}
					{/* ultimately identifying potential areas for product improvement and innovation.</b> */}
					{/* </p> */}
					{/* <p className="tech"> */}
					{/* <strong>Tools:</strong> */}
					{/* <button className="button">Market Research DBs (Statista, IBISWorld)</button> */}
					{/* <button className="button">Figma</button> */}
					{/* <button className="button">Google Workspace (Docs, Slides, Sheets)</button> */}
					{/* <button className="button">Miro</button> */}
					{/* </p> */}
					{/* </div> */}
					{/* </div> */}
					{/*  */}
					{/* <hr /> */}
					{/*  */}
					{/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
					{/* <div className="project-item"> */}
					{/* <div className="project-img"> */}
					{/* <img src="img/Fitbit.PNG" alt="project" /> */}
					{/* <div className="project-links"> */}
					{/* <a */}
					{/* href="https://docs.google.com/document/d/1Haeqkf4aVwKCVdpqiXCdkJCcda1HMJwLwmsJO1Bw/edit?usp=sharing" */}
					{/* title="visit project" */}
					{/* /												target="_blank" */}
					{/* rel="noopener noreferrer"> */}
					{/* Visit Fitbit Versa 2 (Product Teardown) */}
					{/* </a> */}
					{/* </div> */}
					{/* </div> */}
					{/* <h5> */}
					{/* <strong>Fitbit Versa 2 (Product Teardown)</strong> */}
					{/* </h5> */}
					{/* <p> */}
					{/* The Fitbit Versa 2 is a feature-rich smartwatch that balances fitness */}
					{/* tracking with smart features like Amazon Alexa integration and smartphone notifications. */}
					{/* It also offers comprehensive health tracking, including heart rate monitoring, */}
					{/* sleep analysis, and exercise modes. */}
					{/* </p> */}
					{/* <p> */}
					{/* My objective for conducting the product teardown of the Fitbit Versa 2 smartwatch was */}
					{/* to thoroughly <b>evaluate its design, functionality, and performance by analyzing key */}
					{/* features, user interface, target demographics, and overall user satisfaction.</b> */}
					{/* </p> */}
					{/*  */}
					{/* <p className="tech"> */}
					{/* <strong>Tools:</strong> */}
					{/* <button className="button">Market Research DBs (Statista, IBISWorld)</button> */}
					{/* <button className="button">Figma</button> */}
					{/* <button className="button">Google Workspace (Docs, Slides, Sheets)</button> */}
					{/* <button className="button">Miro</button> */}
					{/* </p> */}
					{/* </div> */}
					{/* </div> */}

					{/* <hr /> */}



					{/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
					{/* <div className="project-item"> */}
					{/*  */}
					{/* <h5>
											<strong>ProLink (Product Strategy Document)</strong>
										</h5> */}
					{/* <p>
										ProLink is a hypothetical web and mobile application designed to revolutionize video
										conferencing experience. With the target audience being professionals within the age brackets
										of 25 - 50 years, ProLink offers virtual event hosting and networking
										services, together with advanced CRM features to its
										users.
										</p>
										<p>
										The contents of this document display my strategic thinking skills by showcasing my 
										ability to <b>analyze market opportunities, prioritize key features, and create a detailed 
										action plan.</b> I demonstrate here my <b>strong planning abilities to break down complex projects into 
										achievable milestones.</b> My approach ensures alignment with business goals while also addressing 
										potential challenges effectively.
										</p> */}
					{/* <p className="tech">
											<strong>Tools:</strong>
											<button className="button">Search Engine (Google, Bing, Yahoo)</button>
											<button className="button">Jira</button>
											<button className="button">Miro</button>
											<button className="button">Google Workspace (Docs, Spreadsheet)</button>
											<button className="button">Figma</button>
											<button className="button">Notion</button>
											<button className="button">Canva</button>
										</p> */}
					{/* </div> */}
					{/* </div> */}
					{/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
					{/* <div className="project-item"> */}
					{/* <div className="project-img">
											<img src="/img/stakeholders.PNG" alt="project" />
											<div className="project-links">
												<a
													href="https://docs.google.com/document/d/1TNPtLkLKES2XboUrkFweD8LUzgIMQkzNYIA3mB7P82Q/edit?usp=sharing"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													View Communication Plan
												</a>
											</div>
										</div> */}
					{/* <h5>
											<strong>Stakeholders' Communication</strong>
										</h5> */}
					{/* <p>
											NairaTech, a fintech application, is an hypothetical application. The goal of this stakeholders'
											communication was to <b>showcase my communication skills</b> in situations where there is a technical 
											debt and the development team is falling behind on their deliverables. I showcase here, in clear terms,
											the what, why and where of the progress of an hypothetical project.  
										</p> */}
					{/* <p>
											Carefully curated, but entirely hypothetical, the document highlights <b>the initial timeline of the project,
											issues encountered during development, possible solutions, recommended solutions, and an updated timeline </b>
											for the possible delivery of the feature. The goal of this project was to showcase my stakeholders' communication
											skills and ability to <b>manage, restrategize and execute when unforeseen circumstances</b> arise. 
										</p> */}
					{/* <p className="tech">
											<strong>Tools:</strong>
											<button className="button">Search Engine (Google, Bing, Yahoo)</button>
											<button className="button">Google Docs</button>
											<button className="button">Canva</button>
										</p> */}
					{/* </div> */}
					{/* </div> */}

					{/* Template */}
					{/* <div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="img/Project2.png" alt="project" />
											<div className="project-links">
												<a
													href="link to product"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Link Title
												</a>
											</div>
										</div>
										<h3>
											<strong>Project Title</strong>
										</h3>
										<p>
											Product Overview
										</p>
										<p>
											My Contributions
										</p>
										<p className="tech">
											<strong>Tools:</strong>
											<button>Tool 1</button>
											<button>Tool 2</button>
										</p>
									</div>
								</div> */}
					{/* </div> */}


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
			</div>
		);
	}
}

