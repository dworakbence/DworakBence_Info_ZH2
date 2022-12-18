function ter2()
{
 /* A paralelogramma területének kiszámítása két szomszédos oldala és a köztük lévő szög alapján */

	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var gm=document.getElementById("gm").value;

	if(a<=0 || b<=0 || (gm<=0 || gm>=Math.PI) ) { return "Hiba!"; }
	
	else { return a*b*(Math.sin(gm)); }
	
}