import React from "react";
import GoalList from "./components/GoalList";

import "./App.css";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Have to finish the course" },
    { id: "cg2", text: "Have to do everything by myself" },
    { id: "cg3", text: "Will try to convert it into microservices" },
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
