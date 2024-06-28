/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const allDiscoveryYears = [];

	for (let asteroid of data.asteroids){
		allDiscoveryYears.push(asteroid.discoveryYear)
	}

	const count = allDiscoveryYears.reduce((acc, curr) => {
	acc[curr] = (acc[curr] || 0) +1;
	return acc;
	}, {});
	
	const maxEntry = Object.entries(count)
		.reduce((acc, curr) => {
		return acc[1] > curr[1] ? acc : curr;
	},0);

  let result = maxEntry[0];
	return Number(result);

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
