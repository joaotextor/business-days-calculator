function showToast(toast, message, status, delay) {
    let statusClass = status === 'success' ? 'active-success' : 'active-error'
    toast.classList.remove("active-success", "active-error")
    toast.firstElementChild.innerText = message
    toast.classList.add(statusClass)
    setTimeout(() => {
        toast.classList.remove(statusClass)
    }, delay)
}

export default showToast;