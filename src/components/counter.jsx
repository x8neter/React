import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // count: 0,
    // tags: ["tag1", "tag2", "tag3"]
  };

  /****************this and arrow function*********************** */

  // constructor() {
  //   super(); //super() is calling the constructor of Component.
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //in ES6, can use only an arrow fucntion without using contructor(){}
  //

  /******************this and arrow function********************* */

  //styles here is a defined property.
  //   styles = {
  //     fontSize: 100,
  //     fontWeight: "bold"
  //   };l

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBagetClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        <span className={this.getBagetClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
