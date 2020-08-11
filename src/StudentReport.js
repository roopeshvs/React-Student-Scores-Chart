import React, { Component } from "react";
import axios from "axios";

import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";

import Graph from "./Graph";

class StudentReport extends Component {
  state = {
    options: [],
    data: {},
    current_id: "",
    showReport: false,
  };

  componentDidMount() {
    axios
      .get("https://scores-chart-api.herokuapp.com/api/students/")
      .then((res) => {
        this.setState({
          options: res.data,
        });
      });
  }

  handleChange = ({ value }) => {
    this.setState({
      current_id: value,
      showReport: true,
    });
  };

  render() {
    const options = this.state.options;

    const filterOptions = createFilterOptions({
      options,
    });

    return (
      <div style={{ marginLeft: "20px" }}>
        <div style={{ width: "20%", marginBottom: "20px", marginTop: "20px" }}>
          <Select
            filterOptions={filterOptions}
            options={options}
            onChange={this.handleChange}
          />
        </div>
        {this.state.showReport ? (
          <Graph id={this.state.current_id}></Graph>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default StudentReport;
