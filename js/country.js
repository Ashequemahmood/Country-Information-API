
const loadCountries = async() => {
    const URL = 'https://restcountries.com/v3.1/all';
    try{
        const res = await fetch(URL)
        const data = await res.json();
        displayData(data.slice(0, 3));
    }
    catch(error){
        console.log(error);
    }
    
}

const displayData = countries => {
    console.log(countries);
    const countriesInfoContainer = document.getElementById('countries-info');
    countriesInfoContainer.innerHTML = '';
    countries.forEach(country => {
        console.log(country.cca2);
        const countriesInfo = document.createElement('div');
        countriesInfo.innerHTML = `
            <div class="card w-full h-96 mx-auto bg-base-100 shadow-2xl">
            <figure class = "px-10 pt-10"><img src="${country.flags.png}" alt="Shoes" /></figure>
            <div class="card-body ">
             <h2 class="card-title justify-center">${country.name.common}</h2>
            
            <div class="card-actions justify-center">
            <button onClick = "countryDetails('${country.cca2}')" class="btn btn-primary">Details</button>
            </div>
            </div>
            </div>
        `
        countriesInfoContainer.appendChild(countriesInfo);
    })
}

const countryDetails = async(id) => {
    const URL = `https://restcountries.com/v3.1/alpha/${id}`
    console.log(id);
    try{
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }

}

loadCountries();

const showAllData = showAllDataTogether = async () =>{
    const URL = 'https://restcountries.com/v3.1/all';
    try{
        const res = await fetch(URL)
        const data = await res.json();
        displayData(data);
    }
    catch(error){
        console.log(error);
    }
}