import showToast from "./functions/showToast.js"
import addDays from "./functions/addDays.js"
import validateInput from "./functions/validateInput.js";

const $form = document.forms["form"]
const $initialDate = document.getElementById("startDate");
const $daysToAdd = document.getElementById("daysToAdd");
const $finalDate = document.getElementById("finalDate");
const $toast = document.querySelector(".toast")

$form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault();

    let oldDate = $initialDate.value
    let daysToAdd = $daysToAdd.value

    if (!validateInput($initialDate, $daysToAdd)) return 0

    let newDate = addDays(oldDate, daysToAdd)

    $finalDate.innerText = newDate

    showToast($toast, "Data copiada. Use Ctrl+V para colar.", "success", 5000)
}