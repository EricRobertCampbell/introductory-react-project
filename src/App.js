import React, { Component } from 'react';
import './App.css';

//Get custom components
import MyForm from './components/MyForm.jsx';
import Nav from './components/Nav.jsx';
import Summary from './components/Summary.jsx';

class App extends Component {
	state = {
		info: [
			{
				field: 'company',
				title: 'Seed Company',
				question: 'From which company did you purchase your seeds?',
				response: '',
			},
			{
				field: 'type',
				title: 'Type',
				question: 'What type / species of seed did you purchase?',
				response: '',
			},
			{
				field: 'variety',
				title: 'Variety',
				question: 'What variety of seed did you purchase?',
				response: '',
			},
			{
				field: 'germination',
				title: 'Days to Germination',
				question: 'How many days to germination?',
				response: '',
			},
		],
		current: 0, //current 'page' to view (intro and summary count)

		intro: (
			<div stye={{textAlign: 'center'}}>
				<h1>Introduction</h1>

				<p style={{textAlign: 'center'}}>Use the form to enter your responses. They will be saved automatically, but will be lost if you navigate away from the page entirely.</p>
			</div> ),
	};

	displayCurrentPage() {
		if (this.state.current === 0) {
			return this.state.intro;
		} else if (this.state.current === this.state.info.length + 1) {
			return <Summary info={this.state.info} />;
		} else {
					{/*handleSubmit={(e) => this.handleSubmit(e)} */}
			return (
				<MyForm 
					currentQuestion={this.state.info[this.state.current - 1]} 
					handleChange={(e) => this.handleChange(e)} 
				/>
			);
		}
	}

	/**
	 * Used to increment and decrement the current page
	 */
	increment() {
		this.setState({current: this.state.current + 1});
	}
	decrement() {
		this.setState({current: this.state.current - 1});
	}

	/**
	 * Used to handle when things are input into MyForms
	 */
	handleChange(e) {
		/*
		const copy = this.state.info.map(elem => ({ ...elem }));
		copy[this.state.current - 1].response = e.target.value;
		this.setState({info: copy});
		*/
		/* Each for will only have one value - this, on change we want to get the single value contained in the values property of the formState */
		
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({current: this.state.current + 1});
	}

	render() {
		children[theCurrentOne](stuff I want to pass);

		const list_of_steps = [
		];
		return (
			<>
			{this.props.children[this.state]}
			{/* The current page to display */}
				{/*The current page to display*/}
				{/*this.displayCurrentPage()*/}

			{/* The navigation component */}
				<Nav 
					increment={() => this.increment()}
					decrement={() => this.decrement()}
					current={this.state.current}
					numPages={this.state.info.length + 2}
				/>
			</>
		);
	}
}

export default App;
