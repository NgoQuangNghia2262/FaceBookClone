document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username === "2") | (username === "1")) {
      // Lưu tên người dùng vào localStorage
      localStorage.setItem("username", username);
      window.location.href = "../FormPost.html";
    } else {
      var loginStatus = document.getElementById("loginStatus");
      loginStatus.textContent = "Tên người dùng hoặc mật khẩu không chính xác.";
    }
  });
});
