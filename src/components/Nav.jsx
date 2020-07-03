import React, { Component } from 'react';
import NavButton from './NavButton';

class Nav extends Component {
	render() {
		//console.log(this.props);
		const { numPages, current } = this.props;

		//Generate the navigation / position stuff on the bottom of the page
		let navIndicators = [];
		for (let i = 0; i < numPages; i++) {
			let className = 'navIndicator' + i === current ? "current" : "";
			let elem;
			if (i === 0) {
				elem = <span key={i} className={className}>Intro</span>;
			} else if (i === numPages - 1) {
				elem = <span key={i} className={className}>Summary</span>;
			} else {
				elem = <span key={i} className={className}>{i}</span>;
			}
			navIndicators.push(elem);
		}
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
				{ navIndicators }	

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
