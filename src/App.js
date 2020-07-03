import React, { Component } from 'react';
import './App.css';

//Get custom components
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';

class App extends Component {
	state = {
		info: [
			{
				name: 'test1',
				question: 'Test?1',
				response: 'Test',
			},
			{
				name: 'test2',
				question: 'Test?2',
				response: '',
			},
			{
				name: 'test3',
				question: 'Test?3',
				response: '',
			}
		],
		current: 0, //current 'page' to view (intro and summary count)

		intro: <h1>Intro</h1>,
		summary: <h1>Summary</h1>,

		currentInput: '', //only here for testing
	};

	displayCurrentPage() {
		if (this.state.current === 0) {
			return this.state.intro;
		} else if (this.state.current === this.state.info.length + 1) {
			return this.state.summary;
		} else {
			return (
				<Form 
					currentQuestion={this.state.info[this.state.current - 1]} 
					currentInput={this.state.currentInput}
					handleChange={(e) => this.handleChange(e)} 
				/>
			);
		}
	}

	/**
	 * Used to increment and decrement that current page
	 */
	increment() {
		this.setState({current: this.state.current + 1});
	}
	decrement() {
		this.setState({current: this.state.current - 1});
	}

	/**
	 * Used to handle when things are input into Forms
	 */
	handleChange(e) {
		this.setState({currentInput: e.target.value});
		console.log(`in handleChange. currentInput is ${this.state.currentInput}`);

		const copy = this.state.info.map(elem => ({ ...elem }));
		copy[this.state.current - 1].response = e.target.value;
		this.setState({info: copy});
	}

	render() {
		return (
			<React.Fragment>
				{/*The current page to display*/}
				{this.displayCurrentPage()}

				<Nav 
					increment={() => this.increment()}
					decrement={() => this.decrement()}
					current={this.state.current}
					numPages={this.state.info.length + 2}
				/>
			</React.Fragment>
		);
	}
}

export default App;
