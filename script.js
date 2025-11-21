const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

function palindromeChecker(text) {
  const originalString = sameCase(cleanInput(text));
  const invertedString = invertText(originalString);

  if (originalString === invertedString) {
    textResult.style.color = "#3A9D16";
    textResult.innerText = `${textInput.value} is a palindrome.`;
  } else {
    textResult.style.color = "red";
    textResult.innerText = `${textInput.value} is not a palindrome.`;
  }
}

function cleanInput(text) {
  const regex = /[a-zA-Z0-9]/g;
  if (text.match(regex)) {
  return text.match(regex).join("");
  } else {
    return "";
  }
}

function sameCase(text) {
  return text?.toLowerCase();
}

function invertText(text) {
  const invert = [];
  for (const char of text) {
    invert.unshift(char);
  }
  return invert.join("");
}

checkButton.addEventListener("click", () => {
  if (textInput.value) {
    palindromeChecker(textInput.value);
  } else {
    alert("Please input a value");
  }
});