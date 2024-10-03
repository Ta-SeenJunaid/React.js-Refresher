import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Have to finish the course" },
    { id: "cg2", text: "Have to do everything by myself" },
    { id: "cg3", text: "Will try to convert it into microservices" },
  ]);

  const addNewGoalHandler = (addGoal) => {
    setCourseGoals((previousCourseGoals) =>
      previousCourseGoals.concat(addGoal)
    );
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
