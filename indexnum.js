const
	a= document.getElementById('n1');
	b= document.getElementById('n2');
	c= document.getElementById('n3');
	d= document.getElementById('n4');
	boton= document.getElementById('boton');
	Mayor= document.getElementById('Mayor');
	Menor= document.getElementById('Menor');
	
boton.addEventListener('click', ()=>{
	if((a.value == b.value) || (a.value == c.value) ||(a.value == d.value) ||(b.value == c.value) ||(b.value == d.value) || (c.value == d.value)){
	alert("Existen números repetidos");
	}else{
		var nmayor = 0;
		var nmenor = 0;
		if(a.value>b.value){
			nmayor = a;
			nmenor = b;
		}else{
			nmayor = b;
			nmenor = a;
		}
		if (nmayor.value < c.value){
			nmayor = c;
		}
		if (nmayor.value < d.value){
			nmayor = d;
		}
		if (nmenor.value > c.value){
			nmenor = c;
		}
		if (nmenor.value > d.value){
			nmenor = d;
		}
		Mayor.innerHTML = 'El numero mayor es: ' + nmayor.value ;
		Menor.innerHTML = 'El numero menor es: ' + nmenor.value;
	}

})		