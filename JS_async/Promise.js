'use strict';

/*const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening');
    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You win 😆');
        }
        else{
            reject('You loose 😞');
        }
    }, 2000);
});

// lotteryPromise.then(res => console.log(res), err => console.error(err));
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying SetTimeout: ////////////////////////////////
const wait = function(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(2).then(res => {
    console.log('I waited 2 seconds')
    return wait(3)
}).then(res => console.log('I waited 3 sseconds'));

// Promise resolved imidiately:
Promise.resolve('abc').then(x => console.log(x));
Promise.reject('xyz').catch(x => console.error(x));*/

                                                                                    //
////////// Promisifyiing geolocation /////////////////////////////////////////////////
const getPosition = function() {
    return new Promise(function(resolve , reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then(pos => console.log(pos));