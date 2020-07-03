import React, { Component } from 'react';
import NavButton from './NavButton';

class Nav extends Component {
	render() {
		//console.log(this.props);
		const { numPages, current } = this.props;
		return (
			<nav>
				<h1>Nav</h1>

				{/*Navigate Backwards*/}
				<button 
					type="button" 
					onClick={this.props.decrement}
					disabled={current === 0 ? true : false}
				>Backwards!</button>

				{/* Generate the positions on the bottom of the page here */}
				<p>Number of form elements: {this.props.numPages}</p>

				{/*Navigate forwards*/}
				<button 
					type="button" 
					onClick={this.props.increment}
					disabled={current === numPages - 1 ? true : false}
				>Forwards!</button>
			</nav>
		);
	}
}

export default Nav;
