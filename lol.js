
function transfer(name, amount) {
    alert("Transfer initiated for: " + name);
    window.location.href = "trf.html";
}

function option(amount) {
    alert("Transfer $" + amount );
    transfer(amount);
    window.location.href="dashboard.html";
}


var currentBalance = 5000;

function option(currentBalance, amount) {
    var newBal = currentBalance - amount;
    return newBal;
}

var updatedBalance = option(currentBalance);
document.getElementById("userBalance").textContent = "$" + updatedBalance.toFixed(2);