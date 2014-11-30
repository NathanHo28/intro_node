var sum = 0;

for (i = 2; i < process.argv.length; i++) {
	sum += +process.argv[i];
	// second + in front ensures it gets process as a number.
}

console.log(sum);
