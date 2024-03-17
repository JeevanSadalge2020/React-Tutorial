import { useState } from "react";
let names = ["jeevan", "balu", "santosh", "mahesh"];

function Main() {
  let [name, setName] = useState("Jeevan");
  let [count, setCount] = useState(0);

  function handleNames(arr) {
    let randomNum = (num) => Math.floor(Math.random() * num);
    setName(arr[randomNum(arr.length)]);
  }

  function handleCount() {
    setCount((count += 1));
  }

  return (
    <main>
      <h1>{count}</h1>
      <p>Hello {name}</p>
      <button onClick={() => handleNames(names)}>Change name</button>
      <button onClick={handleCount}>Change count</button>
    </main>
  );
}

export default Main;
