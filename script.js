//import { setTimeout } from 'timers';

console.log('test')



var fs = require('fs');

var done = false;

console.log(`reading`)

//Build up a dictionary that contains the frequency information for the English language.
var content = fs.readFileSync('Wordalizer/count_1w.txt', 'utf8');

var Englishwords = {}

for(line in content.split('\n'))
{
	var parts = line.split('\t');
	EnglishWord[part[0]] = Number(part[1]);
}


//Now build up a frequency list of all the words in the target text.

var re = /\w+"/g;
var s = '[description:"aoeu" uuid:"123sth"]';
var m;

do {
    m = re.exec(s);
    if (m) {
        console.log(m[1], m[2]);
    }
} while (m);

console.log(`done.` + content.length)

