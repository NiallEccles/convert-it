export interface Conversion {
  name: string;
//   conversions: Map<string, Unit>;
  units: Unit[];
}

export interface Unit {
  symbol: string;
  //   conversions: Map<string, Function>;
  conversions: { name: string; formula: Function }[];
}

export const celsius = {
  symbol: "°C",
  conversions: new Map([
    ["Fahrenheit", (celsius: number) => (celsius * 9) / 5 + 32],
    ["Kelvin", (celsius: number) => celsius + 273.15],
  ]),
};

export const fahrenheit = {
  symbol: "°F",
  conversions: new Map([
    ["Celsius", (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9],
    ["Kelvin", (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9 + 273.15],
  ]),
};

// export const temperature: Map<string, Unit> = new Map([
//   ["Celsius", celsius],
//   ["Fahrenheit", fahrenheit],
// ]);

export const temperature: Unit[] = [
  {
    symbol: "°C",
    conversions: [
      {
        name: "Fahrenheit",
        formula: (celsius: number) => (celsius * 9) / 5 + 32,
      },
    ],
  },
];

export const conversions: Conversion[] = [
  {
    name: "Temperature",
    units: temperature,
  },
];
