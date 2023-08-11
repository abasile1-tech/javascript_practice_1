document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const selectElement = document.querySelector('#select');
  selectElement.addEventListener('change', handleSelectChange);
});

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has definitely been clicked.';
}

const handleInput = function (event) {
  const resultParagraph = document.querySelector('#input-result');
  resultParagraph.textContent = `You typed: ${event.target.value}`;
}

const handleSelectChange = function (event) {
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You went with: ${event.target.value}`;
}
