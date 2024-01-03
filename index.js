const mainBox = document.querySelector(".container");

const thanksBox = document.querySelector(".thank-state");

const submitBtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");

const rating = document.getElementById("rating");

const rateBtn = document.querySelectorAll(".btnReating");

submitBtn.addEventListener("click",() =>{
  thanksBox.classList.remove("hidden");
  mainBox.style.display = "none";
})

rateAgain.addEventListener("click",() =>{
  thanksBox.classList.add("hidden");
  mainBox.style.display = "block";
})

rateBtn.forEach((rate)=> {
  rate.addEventListener("click", () =>{
    rating.innerHTML = rate.innerHTML
  })
});