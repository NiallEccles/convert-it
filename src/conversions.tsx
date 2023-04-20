export interface Conversion {
  name: string;
  units: Unit[];
}

export interface Unit {
  symbol: string;
  icon: string;
  name: string;
  to: Formula[];
}

export interface Formula {
  name: string;
  formula: Function;
}

export const temperature: Unit[] = [
  {
    name: "Celsius",
    symbol: "°C",
    icon: "device_thermostat",
    to: [
      {
        name: "Fahrenheit",
        formula: (celsius: number) => (celsius * 9) / 5 + 32,
      },
      {
        name: "Kelvin",
        formula: (celsius: number) => celsius + 273.15,
      },
    ],
  },
  {
    name: "Fahrenheit",
    symbol: "°C",
    icon: "device_thermostat",
    to: [
      {
        name: "Celsius",
        formula: (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9,
      },
    ],
  },
];

export const conversions: Conversion[] = [
  {
    name: "Temperature",
    units: temperature,
  },
  {
    name: "Mass",
    units: temperature,
  },
];
