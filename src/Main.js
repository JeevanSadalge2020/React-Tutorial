function Main() {
  let randomNum = (num) => Math.floor(Math.random() * num);

  let names = ["jeevan", "balu", "santosh", "mahesh"];

  function callNames(arr) {
    return arr[randomNum(arr.length)];
  }

  return (
    <main>
      <p>Hello {callNames(names)}</p>
      <button>Click</button>
    </main>
  );
}

export default Main;
