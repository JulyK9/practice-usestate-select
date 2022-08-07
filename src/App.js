import { useState } from "react";
import "./styles.css";

function SelectExample() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit, idx) => {
    return (
      <option value={fruit} key={idx}>
        {fruit}
      </option>
    );
  });

  // console.log(choice);
  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleChange}>{options}</select>
      <h3>You choose "{choice}"</h3>
    </div>
  );
}

export default SelectExample;
