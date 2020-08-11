import React, { useState, useEffect } from "react";
import { LineChart } from "react-chartkick";
import "chart.js";
import axios from "axios";

const Graph = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://scores-chart-api.herokuapp.com/api/scores/${id}`)
      .then((res) => {
        const scoreData = {};
        const scores = res.data.scores;
        scores.forEach((ele, index) => {
          scoreData[index + 1] = ele.marks;
        });
        setData(scoreData);
      });
  }, [id]);

  return (
    <div>
      <LineChart data={{ ...data }} width="800px" height="300px" />
    </div>
  );
};

export default Graph;
