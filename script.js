function submitInfo(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var url = document.getElementById("url").value;
  var category = document.getElementById("category").value;
  var reason = document.getElementById("reason").value;

  if (!email || !url || !reason) return alert("Please fill out all fields");
  if (email.trim() === "" || url.trim() === "" || reason.trim() === "")
    return alert("Please fill out all fields");

  //   check if email is valid
  if (!validateEmail(email)) return alert("Please enter a valid email");

  var data = {
    email: email,
    url: url,
    category: category,
    reason: reason,
  };

  // send data to server
  fetch("https://Scam-Reporter.chrissquartz.repl.co/submit", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
