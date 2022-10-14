const container = document.querySelector(".container");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const textArea1 = document.querySelector(".area1");
const textArea2 = document.querySelector(".area2");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-pal")) {
    textArea1.textContent = "";
    if (!input1.value) {
      input1.value = 0;
    }
    if (!input2.value) {
      alert("Please enter a top limit.");
    }
    const palidrome = () => {
      for (let i = input1.value; i <= input2.value; i++) {
        let a = i;
        let revA = a.toString().split("").reverse().join("");
        if (a == revA) {
          if (a > 0) {
            textArea1.textContent += `******* ${a} ******* `;
          }
        }
      }
    };
    palidrome();
  }
  if (e.target.classList.contains("btn-per")) {
    textArea2.textContent = "";

    if (!input1.value) {
      input1.value = 1;
    }
    if (!input2.value) {
      alert("Please enter a top limit.");
    }
    const perfect = () => {
      for (let z = input1.value; z <= input2.value; z++) {
        let bol = 0;
        for (let i = 1; i < z; i++) {
          if (z > i && z % i == 0) {
            bol += i;
          }
        }
        if (bol == z) {
          if (bol > 0) {
            textArea2.textContent += `******* ${bol} ******* `;
            bol = 0;
          }
        }
      }
    };
    perfect();
  }
});
