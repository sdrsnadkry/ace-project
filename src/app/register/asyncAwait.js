//async javascript

import { useEffect, useState } from "react";

//setTimeout
// setInterval
//promises

function AsyncAwait() {
  const [value, setValue] = useState("");

  const addTwoNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a + b === 5) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    });
  };

  async function getDataFromPromise() {
    try {
      const value = await addTwoNumbers(3, 3);
      setValue(value);
    } catch (error) {
      setValue(error);
    }
  }

  useEffect(() => {
    getDataFromPromise();
  }, []);

  return <div>Async {value}</div>;
}

export default AsyncAwait;
