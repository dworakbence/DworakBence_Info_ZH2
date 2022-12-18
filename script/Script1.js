function ter()
{
 /* A paralelogramma területének kiszámítása az egyik oldal és a hozzá tartozó magasság alapján */

 var a=document.getElementById("al").value;
 var m=document.getElementById("m").value;

	if( a<=0 || m<=0) { return "Hiba!"; }
	else { return a*m}
}