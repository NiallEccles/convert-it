import { useEffect, useState } from "react";
import { Conversion, Formula, Unit, conversions } from "./conversions";

function App() {
  const [count, setCount] = useState(0);
  const [currentConversion, setCurrentConversion] = useState<Conversion>();
  const [currentUnit, setCurrentUnit] = useState<number>(0);
  const [currentInput, setCurrentInput] = useState(0);

  useEffect(() => {
    console.log({currentConversion, currentUnit, currentInput});
  }, [currentConversion, currentUnit, currentInput]);

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
        {conversions.map((conversion) => (
          <div
            key={conversion.name}
            onClick={() => setCurrentConversion(conversion)}
          >
            <button className="shadow-xl bg-blue-600 rounded-lg relative bg-blend-overlay bg-cover bg-center p-5 block sm:flex sm:flex-col justify-between md:justify-end h-auto md:h-18 ease-in-out duration-300 hover:scale-105 hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 ring-offset-2">
              <h2 className="text-white text-3xl font-bold">
                {conversion.name}
              </h2>
            </button>
          </div>
        ))}
      </div>
      {currentConversion &&
        currentConversion.units.map(({ name, icon, symbol, to }) => (
          <div>
            {/* <h3>{JSON.stringify(symbol)}</h3> */}
            <h3>{name}</h3>
            <input type="text" onChange={(e)=>setCurrentInput(Number(e.target.value))} />
            {/* <span className="material-symbols-outlined">{icon}</span> */}
            <select onChange={(e)=>setCurrentUnit(Number(e.target.value))}>
              {to.map((unit, index) => (
                <option value={index}>{unit.name}</option>
              ))}
            </select>
            <h3>{to[currentUnit].formula(currentInput)}</h3>
            <br />
            <br />
          </div>
        ))}
    </div>
  );
}

export default App;
