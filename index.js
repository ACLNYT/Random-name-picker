// Array of names to pick from
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"];

// Function to pick a random name
function pickRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Running the function and logging the result
console.log("Update* This is made by ACLN.");
console.log("The randomly picked name is: " + pickRandomName());