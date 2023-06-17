import { default as showToast } from "./showToast.js"

const $toast = document.querySelector(".toast")

export default function validateInput(...fields) {
    let error = 0
    for (let field of fields) {
        if (!field.value || isNum(field.value)) {
            field.classList.add("input-error")
            error = 1
        } else {
            field.classList.remove("input-error")
        }
    }
    if (error) {
        showToast($toast, "Corrija os campos em vermelho", "error", 5000)
        return false
    } else {
        return true
    }
}

function isNum(str) {
    if (typeof str != "string") return false
    return isNaN(str) && isNaN(parseFloat(str))
}