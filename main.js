var quoteText = document.getElementById("quoteText");
var author = document.getElementById("author");
var tweetIt = document.getElementById("tweetIt");
var generator = document.getElementById("generator");
//all get elements variables above this line... ... ...
var quotesArr = [
					["Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "Gautam Budha"],
					["Three things cannot be long hidden: the sun, the moon, and the truth.", "Gautam Budha"],
					["Even death is not to be feared by one who has lived wisely.", "Gautam Budha"],
					["Be quiet in your mind, quiet in your senses, and also quiet in your body. Then, when all these are quiet, don't do anything. In that state truth will reveal itself to you.", "Kabir"],
					["All know that the drop merges into the ocean but few know that the ocean merges into the drop.", "Kabir"],
					["I laugh when I hear that the fish in the water is thirsty. I laugh when I hear that people go on pilgrimage to find God.", "Kabir"],
					["Listen to your own Self. If you listen to that Self within, then you find the Truth.", "Kabir"],
					["I sell mirrors in the city of the blind.", "Kabir"],
					["Even Kings and emperors with heaps of wealth and vast dominion cannot compare with an ant filled with the love of God.", "Nanak"],
					["The world is a drama, staged in a dream", "Nanak"],
					["The whole world is in distress. He, who has the Name, becomes joyous.", "Nanak"],
					["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.", "Rumi"],
					["What you seek is seeking you.", "Rumi"],
					["Know thyself.", "Socrates"],
					["If you have to give up, give up anger, fear, guilt, doubt - not your time, your breath, or your clarity.", "Prem Rawat"],
					["Who are we waiting for? We look up to the sky, waiting for the angel to come down and fix all of our problems. You are the angel that can fix your problems.", "Prem Rawat"],
					["Why is it important for you to know who you are? So you can be who you truly are. The seeker, the lover of Peace.", "Prem Rawat"]
				]
//All variable declarations above this line... ... ...
printQuote(); //print a quote and its author when page loads...
generator.onclick = function() { //generate a quote a when clicked...
	printQuote();
}
tweetIt.onclick = function() { //tweet the quote with its author when clicked...
	window.open("https://twitter.com/intent/tweet?text="+quoteText.innerHTML+" "+author.innerHTML);
}
//All function delclarations below this line... ... ...
function getQuote(arr) { //this function will return a quote with its author...
	var sendArr = arr[Math.floor(Math.random()*arr.length)];
	console.log(sendArr);
	return sendArr;
}
function printQuote() { //this function will print the quote and its autor into respective innerHTML...
	var getArr = getQuote(quotesArr);
	quoteText.innerHTML = getArr[0];
	author.innerHTML = "- " + getArr[1];
}