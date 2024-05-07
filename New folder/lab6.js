function printNumbers(from, to) {
    let current = from;

    const timer = setInterval(() => {
        console.log(current); // Output the current number

        if (current === to) {
            clearInterval(timer); // Stop the interval when the target is reached
        } else {
            current++; // Increment the number
        }
    }, 1000); // Set the interval to 1000 milliseconds (1 second)
}

// Example usage:
printNumbers(1, 5);
