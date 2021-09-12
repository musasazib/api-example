const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

loadCountries();

const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of counties) {
    //     console.log(country);
    // }\
    counties.forEach(country => {
        const div = document.createElement('div');

        div.classList.add('countries')

        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);

        countriesDiv.appendChild(div);
    })
}