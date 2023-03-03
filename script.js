var userAgent = require("user-agents");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

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
  if (!validateUrl(url)) return alert("Please enter a valid url");

  var data = {
    email: email,
    url: url,
    category: category,
    reason: reason,
  };

  alert("Thank you for your submission");
  console.log(data);
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateUrl(url) {
  var re = /^(http|https):\/\/[^ "]+$/;
  return re.test(url);
}
