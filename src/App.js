import React, { Component } from 'react';
import logo from './logo.svg';
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
				response: '1',
			},
			{
				name: 'test2',
				question: 'Test?2',
				response: '2',
			},
			{
				name: 'test3',
				question: 'Test?3',
				response: '3',
			}
		],
		current: 0, //current 'page' to view (intro and summary count)

		intro: <h1>Intro</h1>,
		summary: <h1>Summary</h1>,
		pages: [], //all of the pages, including the intro and summary
	};

	constructor() {
		super();

		const pages = [];

		pages.push(this.state.intro);

		for (let i = 0; i < this.state.info.length; i++) {
			const currentQuestion = this.state.info[i];
			pages.push(
				<p>{`name: ${currentQuestion.name}, question: ${currentQuestion.question}, response: ${currentQuestion.response}`}</p>
			);
		}
		pages.push(this.state.summary);

		this.state.pages = pages;
	}

	increment() {
		this.setState({current: this.state.current + 1});
	}

	decrement() {
		this.setState({current: this.state.current - 1});
	}

	render() {
		return (
			<React.Fragment>
				<h1>App</h1>

				{this.state.pages[this.state.current]}

				<Nav 
					increment={() => this.increment()}
					decrement={() => this.decrement()}
					current={this.state.current}
					numPages={this.state.pages.length}
				/>
			</React.Fragment>
		);
	}
}

export default App;
