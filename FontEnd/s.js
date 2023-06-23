import { HeaderLayout } from "./HTML_Element/Layout/Header/Header.js";

function main() {
  const body = document.querySelector(".root");
  body.appendChild(HeaderLayout());
}
main();
