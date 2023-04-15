export interface Conversion {
  name: string;
  category: string;
  from: Unit;
  to: Unit;
}

export interface Unit {
  name: string;
  symbol: string;
  formula: Function;
}

export const temperature: Conversion[] = [
  {
    name: "Celsius to Fahrenheit",
    category: "temperature",
    from: {
      name: "Celsius",
      symbol: "°C",
      formula: (celsius: number) => ((celsius - 32) * 5) / 9,
    },
    to: {
      name: "Fahrenheit",
      symbol: "°F",
      formula: (fahrenheit: number) => (fahrenheit * 9) / 5 + 32,
    },
  },
];

export const distance: Conversion[] = [
  {
    name: "Feet to Centimeter",
    category: "temperature",
    from: {
      name: "Feet",
      symbol: "centimeter",
      formula: (feet: number) => feet * 30.48,
    },
    to: {
      name: "Centimeter",
      symbol: "cm",
      formula: (centimeter: number) => centimeter / 30.48,
    },
  },
];

export const conversions = [
  { name: "Temperature", conversion: temperature },
  { name: "Distance", conversion: distance },
];
