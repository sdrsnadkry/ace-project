// const array = [1, 2, 3, 4, 5];
// // array.push(10);
// // ... spread operator
// const array2 = [...array]
// // [1,2,3,4,5,15] array 2

import { useState } from "react";

// array2.push(15)

// console.log(array, " -> array");
// console.log(array2, " -> array 2");

// let a = "Apple"
// let b = a
// b = 'Ball'
// console.log(a ," -> a")
// console.log(b ," -> b")

//forEach
//map

function List() {
  const [elements, setElements] = useState([
    "Apple",
    "Samsung",
    "One Plus",
    "Motorola",
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleSubmitClick() {
    const newElement = [...elements];
    newElement.push(inputValue);
    setElements(newElement);
    setInputValue("");
  }

  return (
    <div className="mt-10">
      Mobile phone list
      <ul className="bg-slate-300">
        {elements.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
      <div className="mt-10">
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
          className="border"
        />
        <button onClick={handleSubmitClick}>Submit</button>
     
      </div>
    </div>
  );
}

export default List;
