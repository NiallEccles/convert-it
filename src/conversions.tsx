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

export const conversions: Conversion[] = [
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
