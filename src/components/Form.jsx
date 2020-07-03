import React, { Component } from 'react';

class Form extends Component {
	render() {
		let { title, question, response } = this.props.currentQuestion;
		return (
			<div>
				<h1>{title}</h1>

				<form onSubmit={this.props.handleSubmit} style={{textAlign: 'center'}}>
					<label>{question}
						<input 
							value={response}
							onChange={this.props.handleChange}
							type="text" 
							key={title} 
						/>
					</label>
					{/*<button type="submit" onSubmit={this.props.handleSubmit}>Submit</button> */}

				</form>
			</div>
		);
	}
}

export default Form;
