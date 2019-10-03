


// after content is loaded, content will run //
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  // (".pads div") allow you to sellect all divs in pads //
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
// looping all "const pads" and "index"
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      // using currentTime to allow sounds/pads to be clicked with 0 wait time to allow to be clicked again //
      sounds[index].currentTime = 0;
      // using the access we have from "const sounds" // 
      sounds[index].play();
    //  executing function and passing index
      createBubble(index);
    });
  });

  // a function for everytime we click on a pad, it creates a bubble with color //
  const createBubble = index => {

    const bubble = document.createElement("div");
    // attaching bubble to div //
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      // removes bubbles from application after it leaves screen //
      visual.removeChild(this);
    });
  };
});
