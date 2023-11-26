let $ = document;
const weightInput = $.querySelector(".weight-input");
const heightInput = $.querySelector(".height-input");
const infoWeightSpan = $.querySelector("#weight");
const infoHeightSpan = $.querySelector("#height");
const bmiNum = $.querySelector("#bmi-num");
const bmistatus = $.querySelector("#bmi-status");

// Function
function bmiCalculator() {
  let weightValue = weightInput.value;
  let heightValue = heightInput.value;

  infoWeightSpan.innerHTML = weightValue + "kg";
  infoHeightSpan.innerHTML = heightValue + "cm";

  let bmiValue = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);

  bmiNum.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    bmistatus.innerHTML = " Underweight";
    bmiNum.style.color = "#f8fc29";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    bmistatus.innerHTML = "  Normal";
    bmiNum.style.color = "#3ffa68";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    bmistatus.innerHTML = " Overweight";
    bmiNum.style.color = "#fc9a29";
  } else {
    bmistatus.innerHTML = "    Obese";
    bmiNum.style.color = "#ee4604";
  }
}

// Events
weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
