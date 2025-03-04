function formToObject(form) {
    return Object.fromEntries(new FormData(form).entries());
}

// Clear existing error messages
function clearErrors() {
    document.querySelectorAll(".error-message").forEach(error => error.remove());
}

// Display error below the corresponding input field
function showError(inputName, message) {
    let input = document.querySelector(`[name="${inputName}"]`);
    if (input) {
        let error = document.createElement("small");
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.display = "block";
        error.textContent = message;

        // Remove existing error message before adding a new one
        if (input.nextElementSibling?.classList.contains("error-message")) {
            input.nextElementSibling.remove();
        }

        input.insertAdjacentElement("afterend", error);
    }
}

// Validate form fields
function validateForm(form) {
    clearErrors(); // Remove previous errors
    let isValid = true;

    if (typeof form.firstName !== "string" ) {
        showError("firstName", "Invalid first name.");
        isValid = false;
    }

    if (typeof form.lastName !== "string") {
        showError("lastName", "Invalid last name.");
        isValid = false;
    }

    if (typeof form.email !== "string" || !form.email.includes(".")){
        showError("email", "Invalid email address.");
        isValid = false;
    }

    if (!Number.isFinite(+form.phoneNo)) {
        showError("phoneNo", "Invalid phone number. Numbers only.");
        isValid = false;
    }

    return isValid;
}

// Send mail function
function sendMail(email) {
    var link = "mailto:thesynagogues@gmail.com"
        + "?cc=thakgalangmonama@gmail.com"
        + "&subject=" + encodeURIComponent(email.inquiry)
        + "&body=" + encodeURIComponent(
            `Hi!\n\n` +
            `${email.description}\n\n` +
            `Kind regards,\n` +
            `${email.firstName.charAt(0).toUpperCase() + email.firstName.slice(1)} ${email.lastName.charAt(0).toUpperCase() + email.lastName.slice(1)}\n\n` +
            `Additional contact info:\n` +
            `Phone: ${email["phoneNo"]}\n\n`
        );

    window.location.href = link;
    window.location.reload();
}

// Attach event listener to form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let email = formToObject(this); // Capture form data at submission

    if (validateForm(email)) {
        sendMail(email);

    }
});
