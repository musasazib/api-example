const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

loadCountries();

const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countries')
        
        countriesDiv.appendChild(div);
    })
}