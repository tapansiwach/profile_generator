const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const answers = [];

let index = 0;
function askQuestion() {

  interface.question(questions[index] + ": ", (answer) => {
    answers.push(answer);

    if (index === questions.length - 1) {
      console.log(`${answers[0]} loves ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
      interface.close();
    } else {
      index++;
      askQuestion(questions[index]);
    }

  });
}

askQuestion();