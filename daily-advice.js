var currentDate = new Date();

var dateTime =  + (currentDate.getMonth()+1) + ' the '
				+ currentDate.getDate() +'th'


var standardHour = hour;

var monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'Jun', 'July',
  'August', 'September', 'October',
  'November', 'December'
];

var dayNames = ['Sunday', 'Monday', 'Tuesday',
	'Wednesday', 'Thursday', 'Friday', 'Saturday']

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();
var dayIndex = date.getDay();

var isWinter = monthIndex >= 11 && monthIndex <= 1;
var isSpring = monthIndex >= 2 && monthIndex <= 4;
var isSummer = monthIndex >= 5 && monthIndex <= 7;
var isAutumn = monthIndex >= 8 && monthIndex <= 10;

var isNight = hour <= 5 || hour >= 20;
var isMorning = hour >= 5 && hour <= 9;
var isAfternoon = hour >= 12 && hour <= 16;
var isEvening = hour >= 17 && hour <= 20;

var isMonTue = dayIndex === 1 || dayIndex === 2;
var isWedTh = dayIndex === 3 || dayIndex === 4;
var isFri = dayIndex === 5;
var isSat = dayIndex === 6;
var isSun = dayIndex === 0;

var dayPhrase;
var seasonName;
var seasonPhrase;
var timePhrase


// Spring
if (isSpring) {
	seasonName = 'Spring';
	// Evening
	if (isEvening) {
		seasonPhrase = 'Go play disc golf with your bros';
	// Everything other than evening
	} else {
		seasonPhrase = 'Make the most of this weather while it lasts';
	}
}else if (isSummer) {
	seasonName = 'Summer';
	seasonPhrase = 'Prepare to shower repeatedly.';
}	
else if (isAutumn) {
	seasonName = 'Autumn';
	}	
	
	if (isMorning) {
		timePhrase = 'Time to be bright-eyed and bushy tailed.';
	} if (isAfternoon) {
		timePhrase = 'Only a little bit unil freedom.';
	} if (isEvening) {
		timePhrase = 'Time to decompress.';
	} if (isNight) {
		timePhrase = 'Rest up for tomorrow';
	}
	if (isAfternoon) {
		seasonPhrase = 'Winter is coming, but it\'s warm outside. For now... ';
	} if (isEvening) {
		seasonPhrase = 'Enjoy your porch before it gets too cold.'
	} else {
		seasonPhrase = 'Winter is coming.';

	}  if (isMonTue) {
		dayPhrase = 'Rome wasn\'t built in a day.';
	} if (isWedTh) {
		dayPhrase = 'Hang in there.';
	} if (isFri) {
		dayPhrase = 'BEER';
	} if (isSat) {
		dayPhrase = 'College Football';
	} if (isSun) {
		dayPhrase = 'NFL';
	}
 else if (isWinter) {
	seasonName = 'Winter';
	seasonPhrase = 'The Starks warned you of this.';
}



var timeOfDay 

if (hour >= 12) {
	timePeriod = 'PM';
	if (hour > 12) {
		standardHour = hour - 12;
	}
} else {
	timePeriod = 'AM';
} 

console.log()

console.log('Hello, here is some advice for '+ monthNames[monthIndex] + ' ' + day + 'th.');

console.log('It\'s '  + standardHour + ':' + minute + '. ' + timePhrase);

console.log('It\'s ' + dayNames[dayIndex]+'. ' + dayPhrase);

console.log(seasonPhrase);

console.log()



//console.log('TEST LINE '+ seasonPhrase + standardHour + timePeriod+ dayNames[dayIndex]);















