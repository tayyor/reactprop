import Data from "./Profile/Components/Data.js";
import profileimg from "./profileimg.gif";
import "./App.css";

const handleName = () =>
  alert(`Congratulations Hafeez, You've come this far`);
function App() {
  return (
    <Data handleName={handleName}>
      <div>
        {" "}
        <img src={profileimg} alt="profile pix" />
      </div>
    </Data>
  );
}

export default App;
