import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: "",
      priceInput: "",
      loading: false,
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
      error: false,
    });

    // get endpoint to put in fetch parentesis with eidan!!!
    fetch("LINK FOR API HERE", {
      methos: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.nameInput,
        price: parseFloat(this.state.priceInput),
      }),
    });
  }

  render() {
    return (
      <div className="add-item-wrapper">
        <h1>Add an Item</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="nameInput"
            value={this / state / nameInput}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="name"
            name="priceInput"
            value={this / state / priceInput}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
