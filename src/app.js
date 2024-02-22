/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let array1 = ["the", "our"];
  let array2 = ["great", "big"];
  let array3 = ["jogger", "racoon"];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      for (let k = 0; k < array3.length; k++) {
        let domain = array1[i] + array2[j] + array3[k] + ".com";

        console.log(domain);
      }
    }
  }
};
