function toggleRead(id, btn) {
  const text = document.getElementById(id);

  if (text.style.display === "inline") {
    text.style.display = "none";
    btn.innerText = "Read More";
  } else {
    text.style.display = "inline";
    btn.innerText = "Read Less";
  }
}
