document.addEventListener("DOMContentLoaded", () => {
    const datesContainer = document.querySelector(".dates");

    const daysInMonth = 31; // Пример: январь имеет 31 день
    for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement("span");
        dateElement.textContent = i;

        // Необязательно: выделить определенные даты цветом
        if (i === 7i === 19) {
            dateElement.style.backgroundColor = "#ff5722";
            dateElement.style.color = "white";
        }

        datesContainer.appendChild(dateElement);
    }
});
