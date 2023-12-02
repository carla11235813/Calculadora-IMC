const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); //vai impedir o carregamento da página quando ocorrer o submit

    //pegando os dados do input
    const weight = document.getElementById('weight').value; //pegando o valor
    const height = document.getElementById('height').value;

    //cálculo do imc
    const bmi = (weight / (height * height)).toFixed(2); //pegar só duas casas decimais

    const value = document.getElementById('value'); //onde vai ficar o valor imc
    let description = '';

    //tirando o hidden da classe
    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention');

    //descrições para cada imc
    if (bmi < 18.5) {
        description = "Cuidado vc está abaixo do seu peso!";
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";

        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! você está com obesidade severa!";
    } else {
        description = "Cuidado! você está com obesidade mórbida"
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});