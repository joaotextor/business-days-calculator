import { holidays } from "../holidays.js";

export default function addDays(date, days, secao, subsecao) {
  let newDate = new Date(`${date}T04:00:00.000Z`);
  let i = 0;
  while (i < days) {
    newDate.setDate(newDate.getDate() + 1);
    console.log(holidays[secao].cities[subsecao].holidays);
    let brazilDate = newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    if (
      newDate.getDay() === 6 ||
      newDate.getDay() === 0 ||
      holidays.national.includes(brazilDate) ||
      holidays[secao].stateHolidays.includes(brazilDate) ||
      holidays[secao].cities[subsecao].holidays.includes(brazilDate)
    ) {
      i = i;
    } else {
      i++;
    }
  }
  let result = newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  navigator.clipboard.writeText(result);
  return result;
}
