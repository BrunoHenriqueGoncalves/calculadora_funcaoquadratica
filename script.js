let a = parseFloat(document.getElementById('a').value);
let b = parseFloat(document.getElementById('b').value);
let c = parseFloat(document.getElementById('c').value);
let resultado = 0;
    if(isNaN(num1) || isNaN(num2)){
        alert('fala um número idiota do caralho :D');
    }
let delta= (b*b) * (-4 * a * c);
delta= Math.sqrt(delta);
let x_1= (-b + delta)/(2*a);
let x_2= (-b - delta)/(2*a);