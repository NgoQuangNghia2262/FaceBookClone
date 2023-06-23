import { AccountController } from "../DTO/Account.js";
import User from "../DTO/User.js";

async function main() {
  let button = document.querySelector(".container_button button");
  button.addEventListener("click", async () => {
    if (button.className === "activate") {
      var inputs = document.querySelectorAll(".container_center input");
      let KeyActivate = AccountController.generateRandomString();
      let data = {
        Name: inputs[0].value,
        UserName: inputs[1].value,
        PassWord: inputs[2].value,
        BirthDay: inputs[3].value,
        Address: inputs[4].value,
        KeyActivate: KeyActivate,
      };
      await User.RegistUser(data);
      await AccountController.RegistAccount(data);
    }
  });
}
main();
