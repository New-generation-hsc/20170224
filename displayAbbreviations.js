
function displayAbbreviations(){
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		var definition = abbreviations[i].getAttribute('title');
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement('dl');
	for (key in defs){
		var definition = defs[key];
		dtitle  =document.createElement('dt');
		dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);

		ddesc = document.createElement('dd');
		ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	var header = document.createElement('h2');
	var header_text = document.createTextNode("Abbrevations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}