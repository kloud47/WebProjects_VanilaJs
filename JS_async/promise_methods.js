'use strict';

const getJSON = function(url, errMsg='Something went wrong !!!') {
    return fetch(url).then(res => {
        if(!res.ok) throw new Error(`${errMsg}: ${res.status}`);

        return res.json();
    });
};

// const get3Countries = async (c1, c2, c3) => {
//     try{
//         // this runs sequentially and takes more time:
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//         // This runs parallely and takes less time:
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//         ]);

//         // console.log([data1.capital, data2.capital, data3.capital]);
//         console.log(data.map(d => d[0].capital));
//     } catch(err) {
//         console.error(err);
//     }
// };
// get3Countries('portugal', 'usa', 'canada');

(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`)
    ]);
    console.log(res[0].altSpellings[1]);
})();

const timout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            
        })
    })
}