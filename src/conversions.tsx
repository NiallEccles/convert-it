export interface Conversion {
  name: string;
  conversions: Map<string, Unit>;
}

export interface Unit {
  symbol: string;
  conversions: Map<string, Function>;
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

export const temperature: Map<string, Unit> = new Map([
  ["Celsius", celsius],
  ["Fahrenheit", fahrenheit],
]);

export const conversions: Conversion[] = [
  {
    name: "Temperature",
    conversions: temperature,
  },
];
