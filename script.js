const btn = document.querySelector("form button");
const box = document.querySelector(".qr-code");
const inpt = document.querySelector("form input");
const img = document.querySelector(".qr-code img");

btn.addEventListener("click", () => {
  let qrValue = inpt.value;
  if (!qrValue) {
    return alert("لطفا ادرس وارد کنید");
  }
  btn.innerText = "در حال دریافت qr code";
  box.classList.remove("hidden");

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  img.addEventListener("load", () => {
    box.classList.remove("hidden");
    btn.innerText = " qr code تولید";
  });
});

inpt.addEventListener("keyup", () => {
  if (!inpt.value) {
    box.classList.add("hidden");
  }
});
