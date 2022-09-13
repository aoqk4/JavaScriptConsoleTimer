const p = document.querySelector("p");

const input = document.querySelector("input");

const btn = document.querySelector("button");

const saveVal = localStorage.input;

if (saveVal) {
  input.value = saveVal;

  p.textContent = `Last Content : ${saveVal}`;
}

input.addEventListener("keyup", (event) => {
  const val = event.currentTarget.value;
  localStorage.input = val;
});

btn.addEventListener("click", (event) => {
  localStorage.clear();
  input.value = "";
});
