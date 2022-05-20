# default

## main

nlp.train
console.say "Say something!"

## console.hear

// compiler=javascript
if (message === 'quit') {
return console.exit();
}
nlp.process();
this.say();

## onIntent(joke.dad)

// compiler=javascript
const something = request.get('https://icanhazdadjoke.com/slack');
if (something) {
input.answer = something.attachments[0].fallback;
}
