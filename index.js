function toSeconds(str) {
	let timeArr = str.split("");
	let secondHalf = parseInt(timeArr.splice(timeArr.length-2, 2).join(""));
	let firstHalf;
	if (typeof timeArr[1] === ":"){
		firstHalf = parseInt(timeArr[0]) * 60;
	} else {
		firstHalf = parseInt(timeArr.splice(0,2).join("")) * 60;
	};
	return firstHalf + secondHalf;
};
function toKmPerHour(str) {
	if (/^\d{0,2}:\d{2}$/.test(str)) {
		return Math.round((1 / toSeconds(str) * 3600) * 100) / 100 + "km/h";
	} else {
		return "Input format must be mm:ss of m:ss"
	};
}
console.log(toKmPerHour("5:14"));