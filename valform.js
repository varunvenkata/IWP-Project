

//email validation
function validateemail() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const pattern = /^[^]+@[^]+\.[a-zz]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
  if (email == "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
  }
}


//password validation
function validatepwd() {
  const form = document.getElementById("form");
  const pwd = document.getElementById("pwd").value;

  if (
    pwd.match(/[a-z]/g) &&
    pwd.match(/[A-Z]/g) &&
    pwd.match(/[0-9]/g) &&
    pwd.match(/[^a-zA-Z\d]/g) &&
    pwd.length >= 12
  ) {
    form.classList.add("valid1");
    form.classList.remove("invalid1");
  } else {
    form.classList.add("invalid1");
    form.classList.remove("valid1");
  }
  if (pwd == "") {
    form.classList.remove("invalid1");
    form.classList.remove("valid1");
  }
}

//username validation
function validateusername() {
  const form = document.getElementById("form");
  const username = document.getElementById("username").value;

  if (
    (username.match(/^[a-z]/) || username.match(/^[A-Z]/)) &&
    username.match(/[A-Za-z0-9]+$/) &&
    username.length > 5 &&
    username.length < 20
  ) {
    form.classList.add("valid3");
    form.classList.remove("invalid3");
  } else {
    form.classList.add("invalid3");
    form.classList.remove("valid3");
  }
  if (username == "") {
    form.classList.remove("invalid3");
    form.classList.remove("valid3");
  }
}

//confirm password validation
function vaildatereenterpwd() {
  const form = document.getElementById("form");
  const pwd1 = document.getElementById("pwd").value;
  const pwd2 = document.getElementById("pwd1").value;

  if (pwd1 == pwd2) {
    form.classList.add("valid2");
    form.classList.remove("invalid2");
  } else {
    form.classList.add("invalid2");
    form.classList.remove("valid2");
  }
  if (pwd2 == "") {
    form.classList.remove("invalid2");
    form.classList.remove("valid2");
  }
}
