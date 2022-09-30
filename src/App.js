import { useState } from "react";
import "./App.css";
import { Count, CountView, Report, Reports, Details } from "./components";
import "./input.css";

function App() {
  const [count, setCount] = useState(0);
  const [onDetails, setOnDetails] = useState(true);

  return (
    <div className="App  flex bg-black justify-center align-middle items-stretch  w-screen h-screen text text-white">
      <div className="relative"></div>
      <div className="fixed max-h-screen grid grid-cols-2 gap-8">
        <Count count={count} setCount={setCount}></Count>
        <CountView count={count}></CountView>
        <Report></Report>
        <Reports></Reports>
      </div>
      {/* {onDetails && <Details></Details>} */}
    </div>
  );
}

export default App;
