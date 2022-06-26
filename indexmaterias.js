const
cant= document.getElementById('cant');
boton= document.getElementById('boton');
costo= document.getElementById('costo');
valmat= document.getElementById('valmat');
valor= document.getElementById('valor');
temp = document.getElementById('temp');
temp2 = document.getElementById('temp2');

boton.addEventListener('click', ()=>{
	if (temp2.value <= cant.value){
		temp2 = parseInt(temp2.value) + 1;
		temp = parseInt(temp.value) + parseInt(costo.value) * 20 / 100;
		document.f1.valmat.value = 'Digite el valor de materia ' + temp2.value ;
		document.f1.temp2.value = temp2.value;
		document.f1.temp.value = temp.value;
		temp = parseInt(temp.value) + 20000 + 8000;
	}
	if (temp2.value < cant.value){
		costo.innerHTML = 'El valor parcial de las materias es: ' + temp.value ;
	}else{
		costo.innerHTML = 'El valor total de las materias es: ' + temp.value ;
	}
})		