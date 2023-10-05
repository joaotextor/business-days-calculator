import showToast from "./functions/showToast.js";
import addDays from "./functions/addDays.js";
import validateInput from "./functions/validateInput.js";
import { holidays } from "./holidays.js";

const $form = document.forms["form"];
const $initialDate = document.getElementById("startDate");
const $daysToAdd = document.getElementById("daysToAdd");
const $finalDate = document.getElementById("finalDate");
const $toast = document.querySelector(".toast");
const $secao = document.getElementById("select-uf");
const $subsecao = document.getElementById("select-city");

document.addEventListener("DOMContentLoaded", loadCities);

$form.addEventListener("submit", handleFormSubmit);

const secao = $secao.value;

function loadCities() {
  console.log("started loading cities");
  for (const city in holidays[secao].cities) {
    const cityName = holidays[secao].cities[city].name;
    const option = document.createElement("option");
    option.text = cityName;
    option.value = city;
    $subsecao.appendChild(option);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const oldDate = $initialDate.value;
  const daysToAdd = $daysToAdd.value;

  if (!$subsecao.value) {
    console.log("select a city");
    return 0;
  }

  if (!validateInput($initialDate, $daysToAdd)) return 0;
  let newDate = addDays(oldDate, daysToAdd, $secao.value, $subsecao.value);

  $finalDate.parentElement.classList.add("visible");
  $finalDate.innerText = newDate;

  showToast($toast, "Data copiada. Use Ctrl+V para colar.", "success", 5000);
}
