
const inputANodde = document.querySelector('.js-number-a');
const inputBNodde = document.querySelector('.js-number-b');
const selectOperationNodde = document.querySelector('.js-select-operation');
const btnResultNodde = document.querySelector('.js-btn-result');
const outputNodde = document.querySelector('.js-output');

btnResultNodde.addEventListener('click', function(){
    const a = Number(inputANodde.value);
    const b = Number(inputBNodde.value);
    const operation = selectOperationNodde.value;

    const result = calculate({
        a,
        b,
        operation
    });

    outputNodde.textContent = `Result: ${result}`;
});
