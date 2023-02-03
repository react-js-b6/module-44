const restCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (countries) => {
    console.log(countries);
}

restCountries()

