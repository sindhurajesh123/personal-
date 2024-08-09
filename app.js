
function validateForm() {
const name = document.forms["myForm"]["fname"].value;
  const email = document.forms["myForm"]["email"].value;
  const password = document.forms["myForm"]["password"].value;
  const message = document.forms["myForm"]["message"].value;

  if (name == "" || email == "" || password == "" || message == "") {
    alert("All fields must be filled out");
    return false;
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var detailsButton = document.querySelector('.your-class-name');
  if (detailsButton) {
      detailsButton.classList.add('singular');
  } else {
      console.error("Element not found: .your-class-name");
  }
});