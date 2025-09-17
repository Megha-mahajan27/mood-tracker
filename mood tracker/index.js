console.log("✅ script.js is loaded!");

function saveMood(emoji, moodName) {
  console.log("Button clicked:", emoji, moodName);

  const historyDiv = document.getElementById("history");
  const now = new Date();
  const dateTime = now.toLocaleString();

  const entry = document.createElement("div");
  entry.classList.add("entry");
  entry.innerHTML = <span>${emoji} ${moodName}</span><span>${dateTime}</span>;

  historyDiv.prepend(entry);
}