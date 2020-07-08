
function keypadTime(keypad, code) {
	keypad = keypad.split("")
	let startingPlace = keypad.indexOf(code[0]) + 1
	let totalTime = 0
	for (let i = 1; i < code.length; i++) {
		let nextKeyIndex = keypad.indexOf(code[i]) + 1
		let distance = nextKeyIndex - startingPlace
		if (startingPlace === nextKeyIndex) {
			totalTime += 0
			console.log("adding 0")
		}
		else if (startingPlace === 5 || nextKeyIndex === 5) {
			totalTime += 1
			console.log("adding 1 in 2")
		}
		else if (startingPlace%3 === 1) {
			if (distance === 1 || Math.abs(distance) === 3) {
				console.log("adding 1 in 3")
				totalTime += 1
			}
			else {
				console.log("adding 2 in 3")
				totalTime +=2
			}
		}
		else if (startingPlace%3 === 0) {
			if (distance === -1 || Math.abs(distance) === 3) {
				console.log("adding 1 in 4")
				totalTime += 1
			}
			else {
				console.log("adding 2 in 4")
				totalTime += 2
			}
		}
		else {
			if (Math.abs(distance) > 0 && Math.abs(distance) < 5) {
				console.log("adding 1 in 5")
				totalTime += 1
			}
			else {
				console.log("adding 2 in 5")
				totalTime += 2
			}
		}
		startingPlace = nextKeyIndex
	}
	return totalTime
}


console.log(keypadTime("123456798", "225791"))

console.log(keypadTime("153426798", "59422"))