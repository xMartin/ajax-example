var buttonNode = document.getElementById('send');
buttonNode.addEventListener('click', function(event) {
	document.getElementById('display').innerHTML = 'Hello World!';
});

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://80.157.2.254/firefox%20OS/hallo.json');
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
	        alert(xhr.responseText);
	    } else {
	        alert('There was a problem with the request.');
	    }
	}
};
xhr.send();
