import React, { useEffect, useState } from "react";

const Example = () => {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/admin");
    console.log(await res.json());
  };
  fetchData();
  return <div>example</div>;
};

export default Example;
