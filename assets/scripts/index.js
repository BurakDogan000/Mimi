document.addEventListener("DOMContentLoaded", function () {
    /*************
     Hero
     ***************/
    const carouselText = [{
        text: "Explore the world, protect your health.",
        color: "#000"
    }, {text: "Travel, stay healthy.", color: "#000"}, {
        text: "May your journey be healthy.",
        color: "#000"
    }, {text: "Travel and health: Two passions, one website.", color: "#000"},];

    const $text = document.querySelector("#feature-text");
    carousel(carouselText);

    async function typeSentence(sentence, delay = 100) {
        $text.classList.add("typing");
        const letters = sentence.split("");
        let i = 0;
        while (i < letters.length) {
            await waitForMs(delay);
            $text.innerHTML += letters[i];
            i++;
            $text.scrollTop = $text.scrollHeight;
        }
        $text.classList.remove("typing");
    }

    async function deleteSentence() {
        $text.classList.add("typing");
        const sentence = $text.innerHTML;
        const letters = sentence.split("");
        while (letters.length > 0) {
            await waitForMs(100);
            letters.pop();
            $text.innerHTML = letters.join("");
            $text.scrollTop = $text.scrollHeight;
        }
        $text.classList.remove("typing");
    }

    async function carousel(carouselList) {
        var i = 0;
        while (i < carouselList.length) {
            await waitForMs(1500);

            updateFontColor(carouselList[i].color);
            await typeSentence(carouselList[i].text);
            await waitForMs(1500);
            await deleteSentence();

            i++;
            if (i == carouselList.length) {
                i = 0;
            }
        }
    }

    function updateFontColor(color) {
        $text.style.color = color;
    }

    function waitForMs(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    /*************
     Blogs
     ***************/
    let infScroll = new InfiniteScroll('.blogs-section .blogs', {
        path: ".blogs-section .show-more a",
        append: '.blogs-section .blogs .row',
        button: '.blogs-section .show-more button',
        hideNav: '.blogs-section .show-more a',
        scrollThreshold: false,
        history: false,
    });
});
