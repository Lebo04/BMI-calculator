function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let output = document.querySelector("#result");

  if (height === "" || isNaN(height))
  output.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
  output.innerHTML = "Provide a valid Weight!";

  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) output.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
    output.innerHTML = `Normal : <span>${bmi}</span>`;
    else output.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}
