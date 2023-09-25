document.addEventListener("DOMContentLoaded", function () {
  let categories = document.querySelectorAll(
    ".categories-section .categories-container .option"
  );

  categories.forEach(function (category) {
    category.addEventListener("mouseover", function () {
      categories.forEach(function (cat) {
        cat.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

/*************
Hero
***************/
const carouselText = [
  { text: "Explore the world, protect your health.", color: "#000" },
  { text: "Travel, stay healthy.", color: "#000" },
  { text: "May your journey be healthy.", color: "#000" },
  { text: "Travel and health: Two passions, one website.", color: "#000" },
];

document.addEventListener("DOMContentLoaded", async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  const ele = document.querySelector(eleRef);
  while (i < letters.length) {
    await waitForMs(delay);
    ele.innerHTML += letters[i];
    i++;
    ele.scrollTop = ele.scrollHeight;
  }
  return;
}

async function deleteSentence(eleRef) {
  const ele = document.querySelector(eleRef);
  const sentence = ele.innerHTML;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    ele.innerHTML = letters.join("");
    ele.scrollTop = ele.scrollHeight;
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (i < carouselList.length) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    if (i < carouselList.length - 1) {
      await deleteSentence(eleRef);
      await waitForMs(500);
    }

    i++;
    if (i == carouselList.length) {
      await deleteSentence(eleRef);
      await waitForMs(500);
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  const ele = document.querySelector(eleRef);
  ele.style.color = color;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
