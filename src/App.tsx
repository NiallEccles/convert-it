import { useState } from "react";
import { Conversion, Unit, conversions } from "./conversions";

function App() {
  const [count, setCount] = useState(0);

  console.log(conversions);
  
  return (
    <div className="">
      <h1 className="text-xl font-bold text-center py-3">Convert It</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 px-5">
        {/* {conversions.map(({ name, conversion }) => (
          <div key={`${name}`}>
            <button className="shadow-xl bg-blue-600 rounded-lg relative bg-blend-overlay bg-cover bg-center p-5 block sm:flex sm:flex-col justify-between md:justify-end h-auto md:h-18 ease-in-out duration-300 hover:scale-105 hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 ring-offset-2">
              <h2 className="text-white text-3xl font-bold">{name}</h2>
            </button>
            {
              conversion.entries()
            }
          </div>
        ))} */}
        {conversions.map(({ name, units }) => (
          <div key={name}>
            <button className="shadow-xl bg-blue-600 rounded-lg relative bg-blend-overlay bg-cover bg-center p-5 block sm:flex sm:flex-col justify-between md:justify-end h-auto md:h-18 ease-in-out duration-300 hover:scale-105 hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 ring-offset-2">
              <h2 className="text-white text-3xl font-bold">{name}</h2>
              {
                units.map(({symbol}) => (
                  <div>
                    {/* <h3>{JSON.stringify(symbol)}</h3> */}
                    <h3>{JSON.stringify(conversions)}</h3>
                  </div>
                ))
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
