import React from "react";
import ReactDOM from "react-dom";
import profile from ".//Images/Portrait.jpg";
function App() {
  return (
    <div className="profile">
      <h1>This is my personal website work-in-progress!</h1>
    </div>
  );
}
//<img src={profile} className = "profile" alt="Profile picture"></img>
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);
