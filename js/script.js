var obj=document.getElementById("dv1");
var px=0,py=0; //Variáveis de posicionamento

function move(){
		var tecla=event.keyCode;
	// 37 - esquerda, 38 - cima, 39 - direita, 40 - baixo
	// 65 - A, 87 - W, 68 - D, 83 - S
	if(tecla==65){
		px-=10;
		obj.style.left=px+"px";
	}else if(tecla==87){
		py-=10;
		obj.style.top=py+"px";
	}else if(tecla==68){
		px+=10;
		obj.style.left=px+"px";
	}else if(tecla==83){
		py+=10;
		obj.style.top=py+"px";
	}else if(tecla==13){  //13 = Enter
		alert("Evento Keydown Removido!");
		document.removeEventListener("keydown",move);
		obj.style.backgroundColor="#fff";
	}
}

obj=document.getElementById("dv1");
obj.addEventListener("click", addClick);

function addClick(){
	document.addEventListener("keydown",move);
	obj.style.backgroundColor="#f00";
}