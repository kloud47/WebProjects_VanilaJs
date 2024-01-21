'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

                                                                                    //
////////// (Promises) ///////////////////////////////////////////////////////////////
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

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
};


// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => {
//             if(!response.ok)
//                 throw new Error(`Country not found status: ${response.status}`)

//             return response.json();
//         }/*, err => alert(err)*/)
//         // (Promise).then(fullfilled, rejected)
//         .then(data => {
//             renderCountry(data[0]);

//             // For neighbour country:
//             const neighbour = data[0].borders?.[0];
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then(response => {
//             if(!response.ok)
//                 throw new Error(`Country not found status: ${response.status}`)

//             return response.json();
//         })
//         .then(neighbour => renderCountry(neighbour[0], 'neighbour'))
//         // handeling all errors here:
//         .catch(err => {
//             console.error(`${err}`);
//             renderError(`Something went wrong !!! ${err.message}`)
//         })
//         // this is always called:
//         .finally(() => countriesContainer.style.opacity = 1)
// };

// btn.addEventListener('click', function() {
//     getCountryData('portugal');
// });

const getJSON = function(url, errMsg='Something went wrong !!!') {
    return fetch(url).then(res => {
        if(!res.ok) throw new Error(`${errMsg}: ${res.status}`);

        return res.json();
    });
};

const getCountryData = function(country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0]);

            // For neighbour country:
            const neighbour = data[0].borders?.[0];
            if(!neighbour) throw new Error('No neighbour found!!!');
            
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'country not found');
        })
        .then(neighbour => renderCountry(neighbour[0], 'neighbour'))
        // handeling all errors here:
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something went wrong !!! ${err.message}`)
        })
        // this is always called:
        .finally(() => countriesContainer.style.opacity = 1)
};

btn.addEventListener('click', function() {
    getCountryData('australia' );
});

// getCountryData('hjijd');

                                                                                                            //
/////// (Event Loop) ///////////////////////////////////////////////////////////////////////////////////////
console.log('Test start');// upperlevel code:
setTimeout(() => console.log('0 sec timer'), 0);// CallBack queue:
Promise.resolve('Resolve promise 1').then(res => console.log(res));// MicroTask queue:
Promise.resolve("Resolved promise 2").then(res => {
    // for(let i = 0; i < 1000000000; i++) {};
    console.log(res)
});
console.log('Test End');// upperLevel code:

/// MicroTasks disrupts the timers: due to their higher priority:
                                                                                        //