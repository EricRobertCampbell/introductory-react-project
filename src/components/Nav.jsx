import React, { Component } from "react";

class Nav extends Component {
  render() {
    //console.log(this.props);
    const { numPages, current } = this.props;

    //Generate the navigation / position stuff on the bottom of the page
    let navIndicators = [];
    for (let i = 0; i < numPages; i++) {
      let outerClassName =
        "outer" +
        (i === current ? " current" : null) +
        (i === 0 ? " initial" : "") +
        (i === numPages - 1 ? " final" : "");
      let innerClassName =
        "inner" +
        (i === current ? " current" : null) +
        (i === 0 ? " initial" : "") +
        (i === numPages - 1 ? " final" : "");
      let elem = (
        <span key={i} className={outerClassName}>
          <span className={innerClassName}></span>
        </span>
      );
      navIndicators.push(elem);
    }

    return (
      <nav>
        {/* Generate the positions on the bottom of the page here */}
        {navIndicators}
      </nav>
    );
  }
}

export default Nav;
