function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores validos.";
        return
    }
    const imc = peso / (altura * altura);
    let classificacao = "";
    let pesoIdeal = 22 * (altura * altura);
    let mensagemPesoIdeal = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }   else if (imc < 24.9) {
        classificacao = "Peso normal";
    }   else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    }   else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    }   else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    }   else {
        classificacao = "Obesidade grau 3";
    }    
    
    if (peso > pesoIdeal) {
        const perder = (peso - pesoIdeal).toFixed(1);
        mensagemPesoIdeal = `Para alcançar seu peso ideal, você precisa perder cerca de ${perder} kg.`;
    }   else if (peso < pesoIdeal) {
        const ganhar = (peso - pesoIdeal).toFixed(1);
        mensagemPesoIdeal = `Para alcançar seu peso ideal, você precisa ganhar cerca de ${ganhar} kg.`;
    }   else {
        mensagemPesoIdeal = `Você está no seu peso ideal, mantenha-se assim!`
    }
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao}).<br>${mensagemPesoIdeal}`;
}
