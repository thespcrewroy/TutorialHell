document.getElementById("phoneNum").addEventListener("input", (event) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g; // Phone number regex
  const input = document.getElementById("phoneNum"); // Input field
  const format = document.querySelector(".phoneFormat"); // Format message
  const phone = input.value; // Input value
  const found = regex.test(phone); // Test the regex
  if (!found && phone.length) {
    // If the regex is not found and the input length is not 0
    input.classList.add("invalid"); // Add the invalid class
    format.classList.add("block"); // Add the block class
  } else {
    // If the regex is found
    input.classList.remove("invalid"); // Remove the invalid class
    format.classList.remove("block"); // Remove the block class
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const input = document.getElementById("phoneNum"); // Input field
  const regex = /[()-. ]/g; // Regex to remove special characters
  const savedPhoneNum = input.value.replaceAll(regex, ""); // Remove special characters
  console.log(savedPhoneNum); // Output: 1234567890
});

document.getElementById("textForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const input = document.getElementById("textEntry"); // Textarea field
  const regex = / {2,}/g; // Regex to remove extra spaces
  const newText = input.value.replaceAll(regex, " ").trim(); // Remove extra spaces
  console.log(newText); // Output: This is a sentence.
  const encodedInputText = encodeURI(input.value); // Encode the text
  const encodeCleanText = encodeURI(newText); // Encode the cleaned text
  console.log(encodedInputText); // Output: This%20is%20a%20sentence.
  console.log(encodeCleanText); // Output: This%20is%20a%20sentence.
});
