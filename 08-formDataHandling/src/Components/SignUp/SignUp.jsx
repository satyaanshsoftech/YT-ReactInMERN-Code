import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("satyawan");
  const [age, setAge] = useState(30);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  function showName() {
     
  }

  function handleAgeChange(e)
  {
    const{value}=e.target;
    setAge(value);
  }
  useEffect(() => {
     console.log('fetching for ',name);
     
  },[name]);

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="name" />
      <input type="text" onChange={handleAgeChange} placeholder="age" />
      <button onClick={showName}>click me to show name</button>
    </div>
  );
};

export default SignUp;
