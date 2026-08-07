// Objeto que representa la cuenta bancaria
const cuenta = {
    titular: "Jorge Oswaldo",
    saldo: 1000,

    // Método para depositar
    depositar: function(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            alert("Depósito realizado correctamente.");
            actualizarSaldo();
        } else {
            alert("Ingresa una cantidad válida.");
        }
    },

    // Método para retirar
    retirar: function(cantidad) {
        if (cantidad <= 0) {
            alert("Ingresa una cantidad válida.");
        } else if (cantidad > this.saldo) {
            alert("Saldo insuficiente.");
        } else {
            this.saldo -= cantidad;
            alert("Retiro realizado correctamente.");
            actualizarSaldo();
        }
    },

    // Método para consultar saldo
    consultarSaldo: function() {
        alert("Tu saldo actual es: $" + this.saldo);
    }
};


// Mostrar los datos iniciales en la página
document.getElementById("titular").textContent = cuenta.titular;
document.getElementById("saldo").textContent = cuenta.saldo;


// Función para actualizar el saldo mostrado
function actualizarSaldo() {
    document.getElementById("saldo").textContent = cuenta.saldo;
}


// Botón Depositar
document.getElementById("btnDepositar").addEventListener("click", function() {

    const cantidad = Number(document.getElementById("cantidad").value);

    cuenta.depositar(cantidad);

});


// Botón Retirar
document.getElementById("btnRetirar").addEventListener("click", function() {

    const cantidad = Number(document.getElementById("cantidad").value);

    cuenta.retirar(cantidad);

});


// Botón Consultar Saldo
document.getElementById("btnConsultar").addEventListener("click", function() {

    cuenta.consultarSaldo();

});