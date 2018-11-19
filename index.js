function toSec(str) {
	//put data into array
	let timeArr = str.split(":").map(x => parseInt(x));
	//minutes to seconds
	timeArr[0] *= 60;
	//add up all seconds & return
	return timeArr[0] + timeArr[1];
}

function toMinSec(num) {
	//convert to mm:ss, negative slice for double digits after ":"
	return `${Math.floor(num / 60)}:${("0" + (num % 60)).slice(-2)}`
}

function toKmPerHour(str) {
	//for input mm:ss
	if (/^\d{1,2}:\d{2}$/.test(str)) {
		return `${(1 / toSec(str) * 3600).toFixed(2)} km/h`;
	} else {
	//for input x km/h	
		if (/^\d{2}$/.test(str)) {
			return toMinSec(3600 / parseInt(str));
		}
	//for other input
		return "Input format must be (m)m:ss or number (km/h)"
	}
}