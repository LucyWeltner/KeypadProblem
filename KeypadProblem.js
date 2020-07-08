
function keypadTime(keypad, code) {
	keypad = keypad.split("")
	let startingPlace = keypad.indexOf(code[0]) + 1
	let totalTime = 0
	for (let i = 1; i < code.length; i++) {
		let nextKeyIndex = keypad.indexOf(code[i]) + 1
		let distance = nextKeyIndex - startingPlace
		if (startingPlace === nextKeyIndex) {
			totalTime += 0
		}
		else if (startingPlace === 5 || nextKeyIndex === 5) {
			totalTime += 1
		}
		else if (startingPlace%3 === 1) {
			if (distance === 1 || Math.abs(distance) === 3) {
				totalTime += 1
			}
			else {
				totalTime +=2
			}
		}
		else if (startingPlace%3 === 0) {
			if (distance === -1 || Math.abs(distance) === 3) {
				totalTime += 1
			}
			else {
				totalTime += 2
			}
		}
		else {
			if (Math.abs(distance) > 0 && Math.abs(distance) < 5) {
				totalTime += 1
			}
			else {
				totalTime += 2
			}
		}
		startingPlace = nextKeyIndex
	}
	return totalTime
}