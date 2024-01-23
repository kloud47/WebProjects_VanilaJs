'use strict';

const poll = { 
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"], 
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),

    registerNewAnswer: function() {
        const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}
        \n(Write option number)`));
        
        ans < 4 && typeof(ans)? this.answers[ans]++ : console.error("choose again  correctly");
        
        this.displayResults();
        this.displayResults('string');
    },

    displayResults: function(type = 'array') {
        if(type == 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
        else if(type = 'array') {
            console.log(this.answers);
        }
    }
};
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3]}, 'string');