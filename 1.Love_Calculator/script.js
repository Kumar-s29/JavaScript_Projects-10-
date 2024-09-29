function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);
    const loveResult = document.getElementById("result");
    loveResult.innerHTML = `You and ${name2} are ${lovePercentage}% compatible.`;
    if (lovePercentage < 30) {
      loveResult.innerHTML += "<br> Not a Great Match. Keep Looking";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      loveResult.innerHTML +=
        "<br> Average Match. You might have some good times together";
    } else {
      loveResult.innerHTML += "<br> Great Match. You two are meant to be";
    }
  }
}
