function getNick(form)
{
    var nick = form.nick.value;
}

function cpuPick()
{	
    var chars="rps" ;
    var rchar = Math.floor(Math.random() * chars.length) ;
    cpu_pick = chars.substring(rchar, rchar+1) ;
    compare() ;
}

function compare(){
	var uscore = parseInt(document.getElementById("uscore").innerHTML) ;
	var cscore = parseInt(document.getElementById("cscore").innerHTML) ;
	if(user_pick == 'r')
	{
		if(cpu_pick == 's')
			uscore += 1;
		if (cpu_pick == 'p')
			cscore += 1;
	}
	
	else if(user_pick == 'p')
	{
		if(cpu_pick == 'r')
			uscore += 1;
		if (cpu_pick == 's')
			cscore += 1;
	}
	
	 else if(user_pick == 's')
	{
		if(cpu_pick == 'p')
			uscore += 1;
		if (cpu_pick == 'r')
			cscore += 1;
	}


	switch(user_pick)
	{
		case 'r' : udisplay="Rock"; break;
		case 'p' : udisplay="Paper"; break;
		case 's' : udisplay="Scissors"; break;
	}

	switch(cpu_pick)
	{
		case 'r' : cdisplay="Rock"; break;
		case 'p' : cdisplay="Paper"; break;
		case 's' : cdisplay="Scissors"; break;
	}


	document.getElementById("uscore").innerHTML = uscore ;
	document.getElementById("cscore").innerHTML = cscore ;
	document.getElementById("user_choice").innerHTML = udisplay;
	document.getElementById("cpu_choice").innerHTML = cdisplay ;
}

  

