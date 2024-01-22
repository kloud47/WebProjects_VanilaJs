'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
            'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log("Players 1 => ", players1);
console.log("Players 2 => ", players2);
console.log('');

const [gk1, ...fieldPlayers1] = players1;
console.log(`(${game.team1}) => \n Goalkeeper => ${gk1}`, `\nplayers => ${fieldPlayers1}`);

const [gk2, ...fieldPlayers2] = players2;
console.log(`(${game.team2}) => \n Goalkeeper => ${gk2}`, `\nplayers => ${fieldPlayers2}`);
console.log('');

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

players1.push('Thiago', 'Coutinho', 'Perisic');
const players1Final = players1;
console.log(players1Final);
console.log('');

const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

