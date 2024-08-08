
  function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var message = document.forms["myForm"]["message"].value;

    if (name == "" || email == "" || password == "" || message == "") {
      alert("All fields must be filled out");
      return false;
    }
  }