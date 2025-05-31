document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Form ko submit hone se roko (default behaviour off)

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy credentials
  const validEmail = "cyber@shiksha.com";
  const validPassword = "secure123";

  if (email === validEmail && password === validPassword) {
    alert("Login successful! Redirecting...");
    // Yahan tum page redirect kar sakte ho
    window.location.href = "dashboard.html"; // dummy page (tum isse bana sakte ho)
  } else {
    alert("Invalid email or password. Please try again.");
  }
});