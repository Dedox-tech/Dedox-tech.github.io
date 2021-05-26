//Variables
let myButtons = document.getElementsByClassName("custom-button");
let myResultInScreen = document.getElementById("result");
let myEqual = document.getElementById("fire-event");
let myRestart = document.getElementById("restart-button");

//Inicializar en 0 o en cadenas vacias ""
myResultInScreen.innerText = "0";
let collectFinalExpression = "";
let computeFinalExpression = 0;
let count = 0;

//Funcion para reiniciar la calculadora
myRestart.onclick = function () {
    myResultInScreen.innerText = "0";
    collectFinalExpression = "";
    computeFinalExpression = 0;
};

//Capturar los valores cada vez que el usuario presiona el boton
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].onclick = function () {
        if (collectFinalExpression.length > 17) {
            myResultInScreen.innerHTML = collectFinalExpression;
        }
        else {
            collectFinalExpression = collectFinalExpression + myButtons[i].firstElementChild.innerText;
            myResultInScreen.innerText = collectFinalExpression;
        }

    };
}

//Calcular el resultado final de la expresion
myEqual.onclick = function () {
    computeFinalExpression = +math.evaluate(collectFinalExpression).toFixed(5);
    myResultInScreen.innerText = computeFinalExpression.toString();
    collectFinalExpression = computeFinalExpression.toString();
};
