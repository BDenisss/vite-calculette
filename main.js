import './style.css'

console.log("main.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM prêt");
  const calculateButton = document.getElementById("calculate");
  console.log("Bouton calcul : ", calculateButton);
  
  if (calculateButton) {
    calculateButton.addEventListener("click", () => {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;
      let result;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Erreur: division par zéro";
          break;
        default:
          result = "Opération inconnue";
      }

      document.getElementById("result").innerText = `Résultat : ${result}`;
    });
  } else {
    console.error("Le bouton de calcul n'a pas été trouvé dans le DOM.");
  }
});


