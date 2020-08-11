import React from "react";
import "./App.css";
// import Home from "./Home";
import Tabs from "./Tabs";
import NewEntryForm from "./NewEntryForm";
import StudentReport from "./StudentReport";

function App() {
  return (
    <div>
      <h1>Student Reports</h1>
      <Tabs>
        <div label="Add Score">
          <NewEntryForm></NewEntryForm>
        </div>
        <div label="View Report">
          <StudentReport></StudentReport>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
