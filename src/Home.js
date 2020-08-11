import React, { useState } from "react";

import "./Home.css";

import NewEntryForm from "./NewEntryForm";
import Graph from "./Graph";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("Form");

  return (
    <>
      <div class="parentDiv">
        <div class="nav">
          <ul>
            <li
              onClick={() => {
                setCurrentTab("Form");
              }}
            >
              Add Score
            </li>
            <li
              onClick={() => {
                setCurrentTab("Report");
              }}
            >
              View Report
            </li>
          </ul>
        </div>
      </div>
      {currentTab === "Form" ? (
        <div style={{ marginTop: "50px" }}>
          <NewEntryForm></NewEntryForm>
        </div>
      ) : (
        <div style={{ marginTop: "50px" }}>
          <Graph></Graph>
        </div>
      )}
    </>
  );
};

export default Home;
