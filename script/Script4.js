function stat() 
{

var termeknevek=[document.getElementById("a").value, document.getElementById("b").value, document.getElementById("c").value, document.getElementById("d").value, document.getElementById("e").value, document.getElementById("f").value];

var t=[document.getElementById("a2").value, document.getElementById("b2").value, document.getElementById("c2").value, document.getElementById("d2").value, document.getElementById("e2").value, document.getElementById("f2").value];


  var sum = 0;
  var n;
  var atl = sum / t.length;
  var t1 = 0;
  var n1;

  var std;

  for (var i = 0; i < t.length; ++i) {
    n = parseFloat(t[i]);
    sum += n;
  }

  atl = sum / t.length;

  for (var i = 0; i < t.length; ++i) {
    n1 = parseFloat(Math.pow((t[i] - atl), 2));
    t1 += n1;
  }

  std = Math.sqrt(t1 / t.length);

	var s = Math.min(...t);
	return [atl, std, termeknevek[t.indexOf(s.toString())]];
}