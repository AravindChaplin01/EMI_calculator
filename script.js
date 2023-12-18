function calculateEMI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interest").value);
    var tenure = parseFloat(document.getElementById("tenure").value);

    var monthlyInterest = interestRate / (12 * 100);
    var totalPayments = tenure * 12;

    var emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) / (Math.pow(1 + monthlyInterest, totalPayments) - 1);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your Monthly EMI: ₹" + emi.toFixed(2);
}

