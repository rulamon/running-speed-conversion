function toSeconds(str) {
	let timeArr = str.split(":");
	let firstHalf = parseInt(timeArr[0]) * 60;
	let secondHalf = parseInt(timeArr[1]);
	return firstHalf + secondHalf;
};

function toKmPerHour(str) {
	if (/^\d{0,2}:\d{2}$/.test(str)) {
		return Math.round((1 / toSeconds(str) * 3600) * 100) / 100 + "km/h";
	} else {
		return "Input format must be mm:ss of m:ss"
	};
}
console.log(toKmPerHour("5:00"));