
function stripeTables(){
	if(!document.getElementsByTagName) return false;
	tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName('tr');
		for (var i = 0; i < rows.length; i++) {
			if(odd){
				addClass(rows[i], 'odd');
				odd = false;
			}
			else
				odd = true;
		}
	}
}

function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName('tr');
	for (var i = 0; i < rows.length; i++) {
		rows[i].onmouseover = function(){
			this.style.color = "#000";
		}
		rows[i].onmouseout = function(){
			this.style.color = "#777";
		}
	}
}

function addClass(element, value){
	if(!element.className)
		element.className = value;
	else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}