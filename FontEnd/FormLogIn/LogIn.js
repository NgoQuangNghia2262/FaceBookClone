document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra và xử lý dữ liệu đăng nhập ở đây
    // Ví dụ: Gửi yêu cầu đăng nhập đến máy chủ hoặc kiểm tra trong cơ sở dữ liệu

    // Sau khi kiểm tra và xử lý, cập nhật trạng thái đăng nhập
    if ((username === "2") | (username === "1")) {
      // Lưu tên người dùng vào localStorage
      localStorage.setItem("username", username);

      // Chuyển hướng đến trang chính
      window.location.href = "../FormPost.html";
    } else {
      var loginStatus = document.getElementById("loginStatus");
      loginStatus.textContent = "Tên người dùng hoặc mật khẩu không chính xác.";
    }
  });
});
