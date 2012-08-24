var buttonNode = document.getElementById('send');
buttonNode.addEventListener('click', function(event) {
	if (buttonNode.innerHTML == 'start') {
		ajax();
		startTimer(ajax);
		buttonNode.innerHTML = 'stop';
	}
	else {
		stopTimer();
		buttonNode.innerHTML = 'start';
	}
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

var interval;

function startTimer (callback) {
	interval = setInterval(callback, 1000);
}

function stopTimer () {
	clearInterval(interval);
}
