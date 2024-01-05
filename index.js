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
let secao = $secao.value;

document.addEventListener("DOMContentLoaded", loadCities(secao));

$form.addEventListener("submit", handleFormSubmit);
$secao.addEventListener("change", (e) => {
  secao = $secao.value;
  loadCities(secao);
});

function loadCities(uf = secao.value) {
  console.log("started loading cities");
  removeAllOptions($subsecao);
  for (const city in holidays[uf].cities) {
    const cityName = holidays[uf].cities[city].name;
    const option = document.createElement("option");
    option.text = cityName;
    option.value = city;
    $subsecao.appendChild(option);
  }
}

function removeAllOptions(selectBox) {
  while (selectBox.options.length > 0) {
    selectBox.remove(0);
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
  let newDate = addDays(oldDate, daysToAdd, secao, $subsecao.value);

  $finalDate.parentElement.classList.add("visible");
  $finalDate.innerText = newDate;

  showToast($toast, "Data copiada. Use Ctrl+V para colar.", "success", 5000);
}
