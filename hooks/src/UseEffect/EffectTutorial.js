import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("Hello effect");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
      });
  }, []);
  return <div>Hello {data}</div>;
}

export default EffectTutorial;
