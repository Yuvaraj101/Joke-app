import axios from "axios";
import { useState } from "react";

function Calc() {
  const [todaysJoke, setJoke] = useState("");

  function getJoke() {
    axios("https://v2.jokeapi.dev/joke/Any?")
      .then(function (response) {
        if (response.data.type === "single") {
          setJoke(response.data.joke);
        } else {
          setJoke(response.data.setup + " " + response.data.delivery);
        }
      })
      .catch(function () {
        console.log("fail");
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Today's joke is</h1>
        <h2 className="text-lg mb-6">{todaysJoke}</h2>
        <button
          onClick={getJoke}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
        >
          change
        </button>
      </div>
    </div>
  );
}

export default Calc;
