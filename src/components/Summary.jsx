import React, { Component } from 'react';

class Summary extends Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Summary</h1>

				<p>Below is a summary of the information you entered. Please look it over carefully!</p>

				<div className="summaryResults">
				{
					this.props.info.map( q => <p>{q.question}: <mark className="response">{q.response}</mark></p>) 
				}
				</div>
			</div>
		);
	}
}

export default Summary;
