function something()
	{
		var x = window.localStorage.getItem('aaa');

		window.localStorage.setItem('aaa', 555);
		
		alert(x);
	}

function add_to_cart(id) 
	{		
		alert('you added pizza with id: ' + id);
	}

