/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let name = [
  "tech",
  "4weeks",
  "mov1ux",
  "array",
  "loops",
  "html",
  "python",
  "JS"
];
let ext = [".com", ".es", ".info", ".org", ".dev"];
export function generate() {
  let generateName = name[Math.floor(Math.random() * name.length)];
  let generateExt = ext[Math.floor(Math.random() * ext.length)];
  let doma;
  return generateName + generateExt;
}
let generateDomain = generate();
console.log("Nombre dominio:", generateDomain);
