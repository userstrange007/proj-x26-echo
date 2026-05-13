function checkPassword() {
  let password = document.getElementById("passwordInput").value;
  let error = document.getElementById("errorMsg");

  let correctPassword = "0608";

  if (password === correctPassword) {
    error.textContent = "";

    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainPage = document.getElementById("mainPage");

    welcomeScreen.classList.add("fade-out");

    setTimeout(() => {
      welcomeScreen.style.display = "none";

      document.body.classList.add("main-active");

      mainPage.classList.remove("hidden");
      mainPage.classList.add("fade-in");
    }, 700);

  } else {
    error.textContent = "Not quite right… try again ✨";
  }
}

function startWithSound() {
  let music = document.getElementById("bgMusic");
  music.play();

  revealBirthday();
}

function startWithoutSound() {
  revealBirthday();
}

function toggleMusic() {

  let music = document.getElementById("bgMusic");
  let btn = document.getElementById("muteBtn");

  if (music.paused) {

    music.play();
    btn.textContent = "🔊";

  } else {

    music.pause();
    btn.textContent = "🔇";
  }
}

function revealBirthday() {
  const soundBox = document.getElementById("soundBox");
  const title = document.getElementById("birthdayTitle");
  const body = document.getElementById("bodySection");
  const name = document.getElementById("birthdayName");

  soundBox.classList.add("hide-sound-box");

  setTimeout(() => {
  name.classList.remove("hidden-body");
  name.classList.add("show-body");
  }, 850);

  setTimeout(() => {
    title.classList.remove("hidden-title");
    title.classList.add("show-title");
  }, 400);

  setTimeout(() => {
    body.classList.remove("hidden-body");
    body.classList.add("show-body");
  }, 1400);
}


