function stri()
{	
	var t=[document.getElementById("a").value, document.getElementById("b").value, document.getElementById("c").value, document.getElementById("d").value, document.getElementById("e").value, document.getElementById("f").value];


	var tt=[t[Math.floor(Math.random() * t.length)], t[Math.floor(Math.random() * t.length)], t[Math.floor(Math.random() * t.length)] ];

	if(tt[0]==tt[1] || tt[1]==tt[2] || tt[0]==tt[2]) {tt=(t[Math.floor(Math.random() * t.length)], t[Math.floor(Math.random() * t.length)], t[Math.floor(Math.random() * t.length)] ); }

	return tt;
}

