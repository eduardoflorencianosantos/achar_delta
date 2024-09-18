function calcula() {
    const a = document.getElementById('valor_a').value;
    const b = document.getElementById('valor_b').value;
    const c = document.getElementById('valor_c').value;

    let delta = (b * b) - (4 * a * c);
    let raizDelta = Math.sqrt(delta);

    if (delta > 0) {
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);

        document.getElementById('resposta1').innerText = "Valor de x1 = " + x1;
        document.getElementById('resposta2').innerText = "Valor de x2 = " + x2;

    } else if (delta == 0) {
        let xu = (-b) / (2 * a);

        document.getElementById('resposta1').innerText = "Valor único de x = " + xu;

    } else {
        document.getElementById('resposta1').innerText = "Não há raiz";
    }
}