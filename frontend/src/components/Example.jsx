import React, { useEffect, useState } from "react";

const Example = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/comments");
    const data = await res.json()
    console.log(data);
    
  };
  getData();

  // const data = await fetch("https://dummyjson.com/comments");
  // console.log(data);

  return <div>example</div>;
};

export default Example;
