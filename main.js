import './style.css';

console.log("main.js chargé");

export function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Erreur: division par zéro";
    default:
      return "Opération inconnue";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM prêt");
  const calculateButton = document.getElementById("calculate");
  console.log("Bouton calcul : ", calculateButton);

  if (calculateButton) {
    calculateButton.addEventListener("click", () => {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;
      const result = calculate(num1, num2, operation);

      document.getElementById("result").innerText = `Résultat : ${result}`;
    });
  } else {
    console.error("Le bouton de calcul n'a pas été trouvé dans le DOM.");
  }
});
