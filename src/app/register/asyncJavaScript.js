//async javascript

import { useEffect, useState } from "react";

//setTimeout
// setInterval
//promises

function AsyncJavaScript() {
  const [value, setValue] = useState("");
  const fetchData = new Promise((resolve, reject) => {
    const a = 3;
    const b = 3;
    if (a + b === 5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });

  const getValue = async () => {
    try {
      const val = await fetchData;

      console.log(val);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  // useEffect(() => {
  //   fetchData.then((resolvedVal) => {
  //     setValue(resolvedVal);
  //   }).catch((rejectedValue) => {
  //     setValue(rejectedValue);
  //   })
  // }, []);

  return <div>Async {value}</div>;
}

export default AsyncJavaScript;
