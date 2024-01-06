import { useEffect } from "react";

const countries = [
  { name: "Albania" },
  { name: "Andorra" },
  { name: "Armenia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Bosnia and Herzegovina" },
  { name: "Bulgaria" },
  { name: "Croatia" },
  { name: "Cyprus" },
  { name: "Czech Republic" },
  { name: "Denmark" },
  { name: "Estonia" },
  { name: "Finland" },
  { name: "France" },
  { name: "Georgia" },
  { name: "Germany" },
  { name: "Greece" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "Ireland" },
  { name: "Italy" },
  { name: "Kazakhstan" },
  { name: "Kosovo" },
  { name: "Latvia" },
  { name: "Liechtenstein" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Malta" },
  { name: "Moldova" },
  { name: "Monaco" },
  { name: "Montenegro" },
  { name: "Netherlands" },
  { name: "North Macedonia" },
  { name: "Norway" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Romania" },
  { name: "Russia" },
  { name: "San Marino" },
  { name: "Serbia" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Spain" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Turkey" },
  { name: "Ukraine" },
  { name: "United Kingdom" },
  { name: "Vatican City" },
];

export default function RandomCountry() {
  const randomCountryIndex = Math.floor(Math.random() * countries.length);

  return countries[randomCountryIndex].name;
}