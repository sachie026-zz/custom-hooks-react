import React, { useState, useRef, useEffect } from "react";
import useLocalstorageHook from "../../common/hooks/useLocalstorageHook";

const Home = () => {
  const nameRef = useRef(null);
  const [getTimers, setTimers] = useLocalstorageHook(null);

  const onAddClick = () => {
    setTimers("timerName", [nameRef.current.value].toString());
  };

  const getData = async () => {
    const data = await getTimers("timerName");
    console.log("data", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="button" value="Add" onClick={onAddClick} />
    </div>
  );
};
export default Home;
