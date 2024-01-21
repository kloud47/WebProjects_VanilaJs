'use strict';

const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
    const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                    <h3 class="country__name">${data.altSpellings[2]}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
                    <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
                </div>
            </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function() {
    try{
        // Geolocation:
        const pos = await getPosition();
        const { latitude: lat, longitude: lng} = pos.coords;

        // Reverse Geocoding:
        const country = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const dataGeo = await country.json();

        // County data:
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        const data = await res.json();
        // console.log(data[0]);
        renderCountry(data[0])

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        // console.error(err);

        throw err;// Rejecting promise returned from async function, to be caught
    }
};
// console.log('3) Will get location');

// whereAmI().then(city => console.log(city))
//     .catch(err => console.error(`2: ${err.message}`));

// console.log('3) Finished getting location');

console.log('1: Will get location');
(async function() {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`)
    } catch(err) {
        console.log(`2: ${err.message}`)
    }
    console.log(`3: Finished getting location`)
})();