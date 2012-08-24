var buttonNode = document.getElementById('send');
buttonNode.addEventListener('click', function(event) {
	ajax();
	startTimer(ajax);
});

function ajax () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://80.157.2.254/firefox%20OS/random.php');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
		        document.getElementById('display').innerHTML = xhr.responseText;
		    } else {
		        alert('There was a problem with the request.');
		    }
		}
	};
	xhr.send();
}

function startTimer (callback) {
	setInterval(callback, 1000);
}
