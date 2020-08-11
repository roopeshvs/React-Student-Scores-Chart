import React, { Component } from "react";
import axios from "axios";

import "./NewEntryForm.css";

class NewEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_id: "",
      student_name: "",
      score: "",
      showError: false,
      errorMsg: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit(evt) {
    if (this.state.score > 100) {
      this.setState({
        showError: true,
        errorMsg: "Score cannot be greater than 100",
      });
    } else if (
      this.state.score === "" ||
      this.state.student_id === "" ||
      this.state.student_name === ""
    ) {
      this.setState({
        showError: true,
        errorMsg: "All Fields are Mandatory",
      });
    } else {
      this.setState({
        showError: false,
      });
    }

    let bodyFormData = new FormData();

    bodyFormData.set("name", this.state.student_name);
    bodyFormData.set("score", this.state.score);
    bodyFormData.set("student_id", this.state.student_id);

    axios({
      method: "post",
      url: "https://scores-chart-api.herokuapp.com/api/add-score/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((_) => {
        this.setState({
          showError: false,
          student_id: "",
          student_name: "",
          score: "",
        });
      })
      .catch((_) => {
        this.setState({
          showError: true,
          errorMsg: "Oops! Enter Valid Details!",
        });
      });
    //TO-DO: Fix Validation of ID
  }
  render() {
    return (
      <div className="wrapper">
        <div id="box">
          <h3 style={{ marginTop: "15px" }}>Add Score</h3>
          <form>
            <input
              type="number"
              placeholder="Student ID"
              name="student_id"
              value={this.state.student_id}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="student_name"
              placeholder="Student Name"
              value={this.state.student_name}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="score"
              placeholder="Score"
              value={this.state.score}
              onChange={this.handleChange}
            />
          </form>
          <input type="submit" value="SUBMIT" onClick={this.handleSubmit} />
          {this.state.showError ? (
            <div className="signup">
              <p>{this.state.errorMsg}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default NewEntryForm;
