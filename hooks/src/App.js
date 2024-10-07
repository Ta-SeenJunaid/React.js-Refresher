import "./App.css";

import StateTutorial from "./UseState/StateTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
