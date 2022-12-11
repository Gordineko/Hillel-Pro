import "./App.css";

import { Component } from "react";

class App extends Component {
  state = {
    count1: "",
    count2: "",
    answer: 0,
    val: "+",
  };
  onClick = () => {
    switch (this.state.val) {
      case "+":
        return this.setState({
          answer: this.state.count1 + this.state.count2,
        });
      case "-":
        return this.setState({
          answer: this.state.count1 - this.state.count2,
        });
      case "*":
        return this.setState({
          answer: this.state.count1 * this.state.count2,
        });
      case "/":
        return this.setState({
          answer: this.state.count1 / this.state.count2,
        });
      default:
        return;
    }
  };
  onInputChange1 = (e) => {
    this.setState({
      count1: +e.target.value,
    });
  };
  onInputChange2 = (e) => {
    this.setState({
      count2: +e.target.value,
    });
  };
  onSelectChange = (e) => {
    this.setState({
      val: e.target.value,
    });
    console.log(this.state.val);
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={this.state.count1}
            onChange={this.onInputChange1}
          />

          <select
            class="form-select"
            multiple
            aria-label="multiple select example"
            name="select"
            value={this.state.val}
            onChange={this.onSelectChange}
          >
            <option value={this.state.va}>+</option>
            <option value={this.state.va}>-</option>
            <option value={this.state.va}>*</option>
            <option value={this.state.va}>/</option>
          </select>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={this.state.count2}
              onChange={this.onInputChange2}
            />{" "}
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={this.onClick}
            >
              Button
            </button>
          </div>
        </div>
        <div class="card text-center">
          <div class="card-header"> {this.state.answer}</div>
        </div>
      </div>
    );
  }
}

export default App;
