import Account, { AccountController } from "../DTO/Account.js";
function activateAccount(account) {
  const html = `
  <div>
  <div><h2>Nhập mã bảo mật</h2></div>
  <div>
    <div>
      <p>
        Vui lòng kiểm tra điện thoại để xem tin nhắn văn bản có mã. Mã của
        bạn có 6 ký tự.
      </p>
    </div>
    <div>
      <input type="text" placeholder="Nhập mã" />
      <p>Chúng tôi đã gửi cho bạn mã đến:</p>
      <span>+84342534443</span>
    </div>
  </div>
  <div>
    <button class="guilai">Gửi lại</button>
    <button class="tieptuc">Tiếp tục</button>
  </div>
</div>
  `;
  let body = document.querySelector("body");
  body.innerHTML = ``;
  const newElement = document.createElement("div");
  newElement.className = "activateAccount";
  newElement.innerHTML = html;
  body.appendChild(newElement);
  var tieptuc = document.querySelector(".activateAccount .tieptuc");
  tieptuc.addEventListener("click", async () => {
    let input = document.querySelector(".activateAccount input");
    if (account.KeyActivate === input.value) {
      await AccountController.ActivateAccount(account);
      login();
    }
  });
  var guilai = document.querySelector(".activateAccount .guilai");
  guilai.addEventListener("click", async () => {
    const data = {
      username: account.Username,
      KeyActivate: AccountController.generateRandomString(),
    };
    console.log(data.KeyActivate);
    await AccountController.UpdateKeyActivate(data);
  });
}

function login() {
  const html = `
  <div>
    <h1>Đăng nhập</h1>
    <form id="loginForm">
      <label for="username">Tên người dùng:</label>
      <input type="text" id="username" name="username" required />
      <br />
      <label for="password">Mật khẩu:</label>
      <input type="password" id="password" name="password" required />
      <br />
      <a href="../FormRegist/FormRegist.html">Bạn chưa có tài khoản ?</a>
      <button>Đăng nhập</button>
    </form>
    <p id="loginStatus"></p>
  </div>
  `;
  let body = document.querySelector("body");
  body.innerHTML = ``;
  const newElement = document.createElement("div");
  newElement.className = "login";
  newElement.innerHTML = html;
  body.appendChild(newElement);
}

async function main() {
  login();
  var loginForm = document.querySelector(".login button");
  if (loginForm) {
    loginForm.addEventListener("click", async function (event) {
      event.preventDefault();

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      let account = await AccountController.FindOne(username);
      if (!account) {
        var loginStatus = document.getElementById("loginStatus");
        loginStatus.textContent =
          "Tên người dùng hoặc mật khẩu không chính xác.";
        return;
      }
      if (account.Password === password) {
        localStorage.setItem("username", username);
        if (account.Status === "activate") {
          window.location.href = "../FormPost.html";
        } else {
          activateAccount(account);
        }
      } else {
        var loginStatus = document.getElementById("loginStatus");
        loginStatus.textContent =
          "Tên người dùng hoặc mật khẩu không chính xác.";
      }
    });
  }
}
main();
