document.addEventListener('DOMContentLoaded', () => {
	const title = document.querySelector('h1');
	title.textContent = 'JavaScript says, Hello World!';

	const welcomeParagraph = document.querySelector('#welcome-paragraph');

	console.log(welcomeParagraph);
	console.dir(welcomeParagraph);	

	const redElement = document.querySelector('.red');
	console.log(redElement);

	const redListItem = document.querySelector('li.red');
	redListItem.textContent = 'RED!!';
	redListItem.classList.add('bold');
	console.dir(redListItem);

	const allRedElements = document.querySelectorAll('li');
	console.dir(allRedElements);

	const newListItem = document.createElement('li');
	newListItem.textContent = 'Purple';
	newListItem.classList.add('purple');

	const list = document.querySelector('ul');
	list.appendChild(newListItem);
});