// import { cities } from "./data"; // we imported the array of the cities from the file data.js. you can use in your code the array with the name 'cities'

// here you can type your code

const inputElement = document.getElementById('searchfield');
inputElement.addEventListener('input', search);

function search(){
    let inputText = inputElement.value;
    let regExp = new RegExp(inputText,'i');
    document.getElementById('output').innerHTML = '';
    if(inputText.length >1){
        let newMatches = cities.filter(element => (element.city.match(regExp)|| element.state.match(regExp)))
        newMatches.map(element => {
            document.getElementById('output').innerHTML += `<li> ${highlight(element.city,regExp)}, ${highlight(element.state,regExp)} ${element.population} </li>`;
        });
    }
}

function highlight(text , search) {
    return text.replace(search, `<mark>$&</mark>`);
  }

