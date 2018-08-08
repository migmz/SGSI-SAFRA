
document.getElementById('toggleProfile').addEventListener('click', function() {
    [].map.call(document.querySelectorAll('.profile'), function(el) {
        el.classList.toggle('profile--open');
    });
});


	function login () {
	
		var usuario = document.getElementById("fieldUser").value;
		var clave = document.getElementById("fieldPassword").value;
		
		if ((usuario == "admin") && (clave == "123456")){
			
		return true;
		} else {
			alert("Tu no puedes entrar"); 
			return false;
		}
	}