// Generar un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intento;
let contador = 0;

while (true) {

    intento = parseInt(
        prompt("Adivina el número (entre 1 y 100):")
    );

    contador++;

    if (intento > numeroSecreto) {

        alert("Muy alto");

    } else if (intento < numeroSecreto) {

        alert("Muy bajo");

    } else {

        alert(
            "¡Correcto! Lo lograste en " +
            contador +
            " intentos."
        );

        break;
    }
}