'use strict';

var userName = prompt('Hello! what is your name?');

alert('Hi, ' + userName + ' It is a pleasure to meet you');
console.log('Name:' + userName);

var userAnswer1 = prompt('do you wanna hang out today?');
console.log('hanging out today?:' + userAnswer1);
if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
  alert('wow ' + userName + ' that\'s kind of weird, you barely know me');
} else if (userAnswer1.toLowerCase() === 'no' || userAnswer1.toLowerCase() === 'n') {
  alert('fine I didn\'t want to hang either!');
} else {
  alert('Bro, what are you typing?');
}

var userAnswer2 = prompt('do you wanna get some ice cream?');
console.log('we getting ice cream?:' + userAnswer2);
if (userAnswer2.toLowerCase() === 'yes' || userAnswer2.toLowerCase() === 'y') {
  alert('nice that sounds really yummy right now!');
} else if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
  alert('did you want to get something else to eat?');
} else {
  alert('you sure you got the right answer?');
}

var userAnswer3 = prompt('do you have an interest in computers?');
console.log('Interest in computers?:' + userAnswer3);
if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
  alert('awesome so do I!');
} else if (userAnswer3.toLowerCase() === 'no' || userAnswer3.toLowerCase() === 'n') {
  alert('you must be afraid of the machines, skynet could happen after all');
} else {
  alert('your answer does not compute');
}

var userAnswer4 = prompt('do you like the name your parents gave you?');
console.log('Like your name?:' + userAnswer4);
if (userAnswer4.toLowerCase() === 'yes' || userAnswer4.toLowerCase() === 'y') {
  alert('yeah ' + userName + ' seems like a pretty legit name');
} else if (userAnswer4.toLowerCase() === 'no' || userAnswer4.toLowerCase() === 'n') {
  alert('I can feel you man.');
} else {
  alert('are you putting in sensible english?');
}

var userAnswer5 = prompt('did you like this series of weird questions?');
console.log('Like these weird questions?:' + userAnswer5);
if (userAnswer5.toLowerCase() === 'yes' || userAnswer5.toLowerCase() === 'y') {
  alert('alright thats pretty nice of you.');
} else if (userAnswer5.toLowerCase() === 'no' || userAnswer5.toLowerCase() === 'n') {
  alert('it\'s ok, I wasn\'t a big fan either..');
} else {
  alert('Bro, what are you typing?');
}
