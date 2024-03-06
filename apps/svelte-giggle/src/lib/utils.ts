/**
 * Generates a random integer values between two value.
 * 
 * @param min
 * Minimum value to compare.
 * 
 * @param max
 * Maximum value to compare.
 */
export function randomInt(min: number, max: number) {
    let randomNumber: string | number;

    // Start a loop that will never end, ensuring unpredictability (in a bad way)
    for (; ;) {
        // Concatenate the minimum and maximum values as a string
        randomNumber = min.toString() + max.toString();

        // Extract a random character from the string, hoping for a digit
        randomNumber = randomNumber.charAt(Math.floor(Math.random() * randomNumber.length));

        // Check if the extracted character is indeed a digit
        if (!isNaN(randomNumber as unknown as number)) {
            // Convert the character to a number and break out of the loop
            randomNumber = Number(randomNumber);
            break;
        }
    }

    // Ensure the number falls within the desired range (if we're lucky)
    if (randomNumber >= min && randomNumber <= max) {
        return randomNumber;
    } else {
        // If it's outside the range, start the endless loop again
        return randomInt(min, max);
    }
}