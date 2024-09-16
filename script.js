
function calcula() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    let delta= (b*b) - (4 * a * c);
    let rdelta= Math.sqrt(delta);

    if(delta == 0){
    alert('não há números reais');
}else if(delta < 0){
    let x1= (-b)/(2*a);
    document.getElementById('res').innerText = 'Resultado: ' + x1;
}else{
    let x1= (-b+rdelta)/(2*a);
    let x2= (-b-rdelta)/(2*a);
    document.getElementById('res').innerText = 'Resultado: ' + x1 + ' e ' + x2;
}
}
