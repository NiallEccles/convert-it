import { useState } from "react";
import { conversions } from "./conversions";

function App() {
  const [count, setCount] = useState(0);

  console.log(conversions);

  return (
    <div className="">
      <h1 className="text-xl font-bold text-center py-3">Convert It</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 px-5">
        {conversions.map((conversion) => (
          <button
            className="shadow-xl bg-blue-600 rounded-lg relative bg-blend-overlay bg-cover bg-center p-5 block sm:flex sm:flex-col justify-between md:justify-end h-auto md:h-18 ease-in-out duration-300 hover:scale-105 hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 ring-offset-2"
            key={`${conversion.name}`}
          >
            <h2 className="text-white text-3xl font-bold">{conversion.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
