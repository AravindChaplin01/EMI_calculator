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


function displayTable(principal, monthlyInterest, totalPayments) {
    var tableHTML = "<h2>Payment Schedule</h2><table><tr><th>Payment #</th><th>Principal</th><th>Interest</th><th>Total Payment</th><th>Remaining Balance</th></tr>";

    var remainingBalance = principal;

    for (var i = 1; i <= totalPayments; i++) {
        var interestPayment = remainingBalance * monthlyInterest;
        var principalPayment = emi - interestPayment;
        remainingBalance -= principalPayment;

        tableHTML += "<tr><td>" + i + "</td><td>$" + principalPayment.toFixed(2) + "</td><td>$" + interestPayment.toFixed(2) +
                     "</td><td>$" + emi.toFixed(2) + "</td><td>$" + remainingBalance.toFixed(2) + "</td></tr>";
    }

    tableHTML += "</table>";

    var tableElement = document.getElementById("payment-table");
    tableElement.innerHTML = tableHTML;
}
