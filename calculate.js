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
