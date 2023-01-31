import React, { useState } from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.jsx";

import Header from "./components/Header.jsx";

const BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";
const App = () => {
  const [activities, setActivities] = useState([]);

  return (
    <div className="container">
      <Header />
      <ActivityFeed activities={activities} setActivities={setActivities} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
