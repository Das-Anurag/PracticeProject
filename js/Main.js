import { Vector3 } from "./Vector3.js";
let A = new Vector3(3,4,0);
let B = new Vector3(1,2,3);
let C = A.add(B);
document.getElementById("demo").innerHTML =
"C = " + C.show() +
"<br><br>" +
"Length = " + C.length();
