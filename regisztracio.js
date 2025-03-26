document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regisztracio-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const adat = Object.fromEntries(formData);

            fetch("https://script.google.com/macros/s/AKfycbxXNuyntLnr1Lneos9osROaDP_YusJLFL7xaBZ-wAQEGGY4qCwfa5I3kUBz7bA4pz1wLw/exec", { // Cseréld ki a Google Apps Script URL-re
                method: "POST",
                body: JSON.stringify(adat),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.text())
            .then(data => {
                alert("Sikeres jelentkezés!");
                form.reset(); // Az űrlap ürítése sikeres beküldés után
            })
            .catch(error => {
                alert("Hiba történt a jelentkezés során!");
                console.error("Hiba:", error);
            });
        });
    }
});

