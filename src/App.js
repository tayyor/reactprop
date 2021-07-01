import Data from "./Profile/Components/Data.js";
import profileimg from "./profileimg.gif";
import "./App.css";


function App() {
  return (
    <Data>
      <div>
        {" "}
        <img src={profileimg} alt="profile pix" />
      </div>
    </Data>
  );
}

export default App;
