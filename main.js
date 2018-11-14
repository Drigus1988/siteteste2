var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('por favor, digite seu nome.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Jesus te ama, ' + myName;}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Jesus te ama,' + storedName;
}
myButton.onclick = function() {
		setUserName();
	}