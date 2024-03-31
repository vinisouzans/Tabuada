// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTible = document.querySelector(
    "#multiplcation-title span"
);

const multiplicationTable = document.querySelector(
    "#multiplication-operations");

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML ="";

    
    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
                <div class="operetion">${number} x ${i} = </div> 
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser();
        
        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTible.innerText = number;
    
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable (multiplicationNumber, multiplicatorNumber);
    //console.log(multiplicationNumber, multiplicatorNumber);
});
