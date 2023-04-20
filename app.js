//input
const bDayInput = document.getElementById('bDayInput');
const bMonthInput = document.getElementById('bMonthInput');
const bYearInput = document.getElementById('bYearInput');

//output
const yearsOutput = document.getElementById('yearsOutput');
const monthsOutput = document.getElementById('monthsOutput');
const daysOutput = document.getElementById('daysOutput');

//Form element
const form = document.querySelector('form');

//adding the submit EVENTLISTENTER to form
form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months=  [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate(){
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) =>{
        const parent = i.parentElement;
        if(!i.value){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = "This field is required."
            validator = false;
        } else if (bMonthInput.value > 12){
            bMonthInput.style.borderColor = "red";
            bMonthInput.parentElement.querySelector('small').innerText = 'must be a valid month.'
            validator = false;
        } else if (bDayInput.value > 31){
            bDayInput.style.borderColor = 'red';
            bDayInput.parentElement.querySelector('small').innerText = 'must be a valid day.'
            validator = false;
        } else{
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = '';
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e){
    e.preventDefault();
    if (validate()){
        if (bDayInput.value > day){
            day = day + months[month - 1];
            month = month - 1;
        }
        if (bMonthInput.value > month){
            month = month + 12;
            year = year -1;
        }

        const d = day - bDayInput.value;
        const m = month - bMonthInput.value;
        const y = year - bYearInput.value;

        daysOutput.innerHTML = d;
        monthsOutput.innerHTML = m;
        yearsOutput.innerHTML = y;

    }
}
