var buttonNode = document.getElementById('send');
buttonNode.addEventListener('click', function(event) {
	var displayNode = document.getElementById('display');
	var text = 'Hello World!';
	var textNode = document.createTextNode(text);
	displayNode.appendChild(textNode);
});
