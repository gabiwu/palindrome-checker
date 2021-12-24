const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome); // Event listener to trigger 'palindrome'

// Function to verify if a palindrome
function palindrome() {
    const text = document.querySelector(".input-text").value;
    let len = text.length; // Accessing full length of supplied text

    // Extracting first and last index of text (word) using substring method and Math.floor to round down second parameter.
    let start = text.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = text.substring(len - Math.floor(len / 2)).toLowerCase();

    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join(""); // Using spread operator to retrieve palindrome

    // Conditional statement to assess whether input value is palindrome or not.
    if (start == flip) {
        result.innerHTML = `${text.toUpperCase()} is a palindrome`
    } else {
        result.innerHTML = `${text.toUpperCase()} is NOT a palindrome`
    }
      // alert(flip);
}