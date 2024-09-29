//Pallindrom Checker

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}
function checkPalindrome() {
  const text = document.getElementById("text").value;
  const result = document.getElementById("result");
  if (isPalindrome(text)) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
  result.classList.add("fadeIn");
  text.value = "";
}

document.getElementById("checkBtn").addEventListener("click", checkPalindrome);
