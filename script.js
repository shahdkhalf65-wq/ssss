const button = document.getElementById("myButton");
const message = document.getElementById("message");

let clicks = 0;

button.addEventListener("click", () => {
  clicks++;
  message.textContent = clicks === 1
    ? "أحسنت! ضغطة واحدة ✅"
    : `ضغطت على الزر ${clicks} مرات 🎉`;
});
