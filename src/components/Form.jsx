import React, { Component } from 'react';

class Form extends Component {
	render() {
		let { name, question, response } = this.props.currentQuestion;
		return (
			<div>
				<h1>Form</h1>

				<form onSubmit={this.props.handleSubmit}>
					<label>Question: {question}
						<input 
							value={response}
							onChange={this.props.handleChange}
							type="text" 
							key={name} 
						/>
					</label>
					<button type="submit" onSubmit={this.props.handleSubmit}>Submit</button>
				</form>
				<p>Name: {name}</p>
				<p>Qestion: {question}</p>
				<p>Response: {response}</p>
			</div>
		);
	}
}

export default Form;
