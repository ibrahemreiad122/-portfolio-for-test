document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
  });
var pass = document.getElementById("pass"),
  conf = document.getElementById("confPass"),
  btn = document.getElementById("btnConf"),
  firstName = document.getElementById("first"),
  lastName = document.getElementById("last"),
  email = document.getElementById("email"),
  emailCon = document.getElementById("emailCon"),
  nameCon = document.getElementById("nameCon"),
  btnCon = document.getElementById("btnCon");

(regOfEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  (regOfName = /^[a-zA-Z]{3,20}$/),
  (regOfPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
btn.onclick = function confirmPass(event) {
  if (
    !(
      pass.value === conf.value &&
      firstName.value.match(regOfName) &&
      lastName.value.match(regOfName) &&
      pass.value.match(regOfPass) &&
      email.value.match(regOfEmail9)
    )
  ) {
    event.preventDefault();
  }
};

// btn.addEventListener("click", function(event) {
//   event.stopPropagation();
//   console.log("home page btn");
// });

// btnCon.addEventListener("click", function(event) {
//   event.stopPropagation();
//   console.log("conatact us btn");
// });

btnCon.onclick = function confData(event) {
  if (!(nameCon.value.match(regOfName) && email.value.match(regOfEmail))) {
    event.preventDefault();
  }
  console.log("welcome");
};
