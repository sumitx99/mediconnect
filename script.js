function bookNow() {
  // Optionally: validate inputs if needed
  const name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    alert("Please enter your name before booking.");
    return;
  }

  // Hide form container
  document.getElementById("formContainer").style.display = "none";

  // Show thank-you message
  document.getElementById("thankYouMessage").style.display = "block";
}
