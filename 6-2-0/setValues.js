function populateValues() {
  document.getElementById("partnerid").value = window.localStorage.getItem(
    "partnerid"
  )
    ? window.localStorage.getItem("partnerid")
    : "";
  document.getElementById("partneruserid").value = window.localStorage.getItem(
    "partneruserid"
  )
    ? window.localStorage.getItem("partneruserid")
    : "";
  document.getElementById("loginkey").value = window.localStorage.getItem(
    "loginkey"
  )
    ? window.localStorage.getItem("loginkey")
    : "";
  document.getElementById("session-code").value = window.localStorage.getItem(
    "session-code"
  )
    ? window.localStorage.getItem("session-code")
    : "";
  updatepartnerid(document.getElementById("partnerid").value);
  updatepartneruserid(document.getElementById("partneruserid").value);
  updateloginkey(document.getElementById("loginkey").value);
  updatesessioncode(document.getElementById("session-code").value);
}

function setValuesInStorage() {
  window.localStorage.setItem(
    "partnerid",
    document.getElementById("partnerid").value
  );
  window.localStorage.setItem(
    "partneruserid",
    document.getElementById("partneruserid").value
  );
  window.localStorage.setItem(
    "loginkey",
    document.getElementById("loginkey").value
  );
  window.localStorage.setItem(
    "session-code",
    document.getElementById("session-code").value
  );
}

window.onload = (event) => {
  populateValues();
  document
    .getElementById("partnerid")
    .addEventListener("input", setValuesInStorage);
  document
    .getElementById("partneruserid")
    .addEventListener("input", setValuesInStorage);
  document
    .getElementById("loginkey")
    .addEventListener("input", setValuesInStorage);
  document
    .getElementById("session-code")
    .addEventListener("input", setValuesInStorage);
};
