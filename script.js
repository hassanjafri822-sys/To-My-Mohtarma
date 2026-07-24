/* ==========================================
        Project MoonRiver
        Version 2.0
========================================== */

"use strict";

/* ==========================================
        ELEMENTS
========================================== */

const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");

const loader = document.querySelector(".loader");
const cursor = document.querySelector(".cursor-glow");
const moon = document.querySelector(".moon");

/* ==========================================
        PAGE STATE
========================================== */

let currentPage = -1;

/* ==========================================
        PAGE CONTENT
========================================== */

const pages = [

`
<div class="thoughts-layout">

    <div class="photo-frame">

        <img src="images/Smile.jpeg"
             alt="Her Beautiful Smile"
             class="thought-photo">

        <p class="photo-caption">
            One of my favourite smiles. 🌸
        </p>

    </div>

    <div class="thoughts-text">

        <p class="small-title">
            🌙 For The Days You Need This
        </p>

        <h1>
            Just Breathe.
        </h1>

        <p class="description">

            Sometimes life becomes a little too noisy.

            <br><br>

            There are days when everything feels heavier than they should.

            <br><br>

            If today happens to be one of those days...

            I hope this little corner reminds you that
            you don't have to carry everything alone.

            <br><br>

            Rest when you need to.

            Smile when you can.

            And remember...

            <br><br>

            <em>"The moon never rushes to become full."</em>

        </p>

        <button class="enter-btn next-btn">

            Continue

            <span class="arrow">→</span>

        </button>

    </div>

</div>
`,

`
<p class="small-title">

🌸 Little Reminders

</p>

<h1>

Things I Hope You Never Forget

</h1>

<div class="reminder-grid">

    <div class="reminder-card">
        🌙
        <span>Be gentle with yourself.</span>
    </div>

    <div class="reminder-card">
        ✨
        <span>Rest is part of growing.</span>
    </div>

    <div class="reminder-card">
        🌸
        <span>You don't have to be perfect.</span>
    </div>

    <div class="reminder-card">
        🍃
        <span>Tomorrow always brings another chance.</span>
    </div>

</div>

<button class="enter-btn next-btn">

Continue

<span class="arrow">→</span>

</button>

<p class="signature">

One step at a time 🤍

</p>
`,
`
<div class="letter-scene">

    <h2 class="letter-title">
        💌 A Letter For You
    </h2>

    <div class="envelope" id="envelope">

        <div class="envelope-flap"></div>

        <div class="envelope-body"></div>

        <div class="letter-paper">

            <div class="letter-content">

                <h3>To Madam Ji 🌙</h3>

                <p>

                    I don't always know the perfect words.

                    <br><br>

                    But if there's one thing I truly hope
                    you remember...

                    <br><br>

                    You deserve kindness.

                    You deserve happiness.

                    And I hope life always gives you
                    reasons to smile.

                    <br><br>

                    Whenever things become difficult,

                    I hope this little corner reminds you
                    that someone quietly wishes the best
                    for you.

                    <br><br>

                    Take care of yourself.

                    Sleep well.

                    Eat on time.

                    Keep painting.

                    Keep smiling.

                    <br><br>

                    — Your Bhondu 🌙

                </p>

            </div>

        </div>

    </div>

    <button class="enter-btn open-letter-btn">

        Open Letter 💌

    </button>

    <button class="enter-btn next-btn hidden-next">

        Continue →

    </button>

</div>
`,

`
<p class="small-title">
    ✨ Hidden Constellation
</p>

<h1>
    Some Stars Hide Little Secrets
</h1>

<p class="description">
    Click any glowing star and see what it has been waiting to tell you.
</p>

<div class="constellation">

    <div class="star" data-note="1" style="top:8%; left:18%;"></div>
    <div class="star" data-note="2" style="top:22%; left:72%;"></div>
    <div class="star" data-note="3" style="top:48%; left:30%;"></div>
    <div class="star" data-note="4" style="top:66%; left:78%;"></div>
    <div class="star" data-note="5" style="top:38%; left:56%;"></div>
    <div class="star" data-note="6" style="top:15%; left:90%;"></div>
    <div class="star" data-note="7" style="top:72%; left:12%;"></div>
    <div class="star final-star" data-note="8" style="top:82%; left:52%;"></div>

</div>

<div class="note-popup">

    <div class="note-paper">

        <button class="close-note">×</button>

        <div class="note-content">

            <!-- Filled by JavaScript -->

        </div>

    </div>

</div>

<button class="enter-btn next-btn hidden-next">

    Continue →

</button>
`,

`
<p class="small-title">
    📸 Little Memories
</p>

<h1>
    Some Moments I Wanted To Keep
</h1>

<p class="description">
    Every photo carries a little memory.
    Click any one to look a little closer.
</p>

<div class="memory-board">

    <div class="polaroid" data-photo="1">
        <img src="images/memory1.jpeg" alt="Memory 1">
        <p>The best art I have ever seen in my life, yet. 🌸</p>
    </div>

    <div class="polaroid" data-photo="2">
        <img src="images/memory2.jpeg" alt="Memory 2">
        <p>A peaceful little moment. 🌙</p>
    </div>

    <div class="polaroid" data-photo="3">
        <img src="images/memory3.jpeg" alt="Memory 3">
        <p>The artist herself. 🎨</p>
    </div>

    <div class="polaroid" data-photo="4">
        <img src="images/memory4.jpeg" alt="Memory 4">
        <p>My Aesthetic Diva~. 🤍</p>
    </div>

</div>

<div class="memory-popup">

    <div class="memory-card">

        <button class="close-memory">&times;</button>

        <img class="popup-photo" src="" alt="Memory">

        <p class="popup-caption"></p>

    </div>

</div>

<button class="enter-btn next-btn">

    Continue →

</button>
`,
`
<div class="ending-page">

    <div class="ending-moon"></div>

    <div class="ending-text">

        <p class="line line-1">
            Whenever life feels a little heavier...
        </p>

        <p class="line line-2">
            I hope you remember this little corner.
        </p>

        <p class="line line-3">
            It'll always be here,
            waiting quietly for you.
        </p>

        <div class="ending-signature">

            — Apka Bhondu 🌙

        </div>

        <p class="ending-secret">

            (Click the moon once more.)

        </p>
        
     <p class="final-whisper">

    Thank you for staying until the very end.

    <br><br>

    I hope this little corner
    always reminds you
    how much someone quietly wishes
    for your happiness.

    🤍

</p>

<button class="enter-btn final-next">

    One Last Page →

</button>
`,
`
<p class="small-title">🌌 That's All</p>

<h1>For Now 🤍</h1>

<p class="description">

Thank you for spending a little time here.



I hope this tiny corner
made today a little softer.
<br><br>
Always remember...
<br><br>
I will always be there for you whenever you needed someone the most.
</p>

<button class="enter-btn restart-btn">

Start Again
</button>

<p class="signature">

— Made with care
</p>
`

];

/* ==========================================
        LOADER
========================================== */

window.addEventListener("load", () => {

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/* ==========================================
        CURSOR GLOW
========================================== */

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}

/* ==========================================
        BUTTON HOVER
========================================== */

document.addEventListener("mouseover", (e) => {

    if (!cursor) return;

    if (e.target.closest(".enter-btn")) {

        cursor.style.width = "45px";
        cursor.style.height = "45px";

    }

});

document.addEventListener("mouseout", (e) => {

    if (!cursor) return;

    if (e.target.closest(".enter-btn")) {

        cursor.style.width = "22px";
        cursor.style.height = "22px";

    }

});
/* ==========================================
        PAGE TRANSITION
========================================== */

function showPage(index) {

    if (!content) return;

    /* Fade current content out */

    content.classList.add("fade-out");

    if (moon) {

        moon.classList.add("bright");

    }

    setTimeout(() => {

        /* Replace page */

        content.innerHTML = pages[index];

        /* Fade back in */

        content.classList.remove("fade-out");

        content.classList.add("fade-in");

        setTimeout(() => {

            content.classList.remove("fade-in");

            if (moon) {

                moon.classList.remove("bright");

            }

        }, 800);

        /* ==========================
              NEXT BUTTON
        ========================== */

        const nextBtn = document.querySelector(".next-btn");

        if (nextBtn) {

            nextBtn.addEventListener("click", () => {

                currentPage++;

                if (currentPage < pages.length) {

                    showPage(currentPage);

                }

            });

        }

        /* ==========================
             RESTART BUTTON
        ========================== */

        const restartBtn = document.querySelector(".restart-btn");

        if (restartBtn) {

            restartBtn.addEventListener("click", () => {

                location.reload();

            });

        }

    }, 800);

}

/* ==========================================
        FIRST BUTTON
========================================== */

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        currentPage = 0;

        showPage(currentPage);

    });

}


/* ==========================================
        LETTER PAGE
========================================== */

document.addEventListener("click", (event) => {

    // Only continue if the Open Letter button was clicked
    if (!event.target.classList.contains("open-letter-btn")) return;

    const envelope = document.querySelector(".envelope");
    const openButton = document.querySelector(".open-letter-btn");
    const nextButton = document.querySelector(".hidden-next");

    if (!envelope) return;

    // Open the envelope
    envelope.classList.add("open");

    // Hide the Open Letter button
    if (openButton) {

        openButton.style.display = "none";

    }

    // Show Continue button after animation
    setTimeout(() => {

        if (nextButton) {

            nextButton.classList.add("show");

        }

    }, 1400);

});

/* ==========================================
        HIDDEN STARS
========================================== */

document.addEventListener("click", (event) => {

    const star = event.target.closest(".star");

    if (!star) return;

    star.classList.add("active");

    const message = document.querySelector(".star-message");

    if(message){

        message.innerHTML = star.dataset.message;

    }

});


/* ==========================================
        HIDDEN CONSTELLATION
========================================== */

const notes = {

    1: {
        title: "🌸",
        text: `
        I hope you never stop painting.
        <br><br>
        Every painting you create carries a little part of you,
        and that's what makes it beautiful.
        `
    },

    2: {
        title: "☕",
        text: `
        Friendly reminder...
        <br><br>
        Drink some water.
        Eat on time.
        Don't skip your meals.
        `
    },

    3: {
        title: "🌙",
        text: `
        If life ever feels too loud,
        <br><br>
        remember...
        even the moon shines brightest
        in the quiet night.
        `
    },

    4: {
        title: "💙",
        text: `
        You deserve kindness.
        <br><br>
        Especially from yourself.
        `
    },

    5: {
        title: "✨",
        text: `
        Never underestimate
        the happiness your smile
        brings to people around you.
        `
    },

    6: {
        title: "🌼",
        text: `
        Rest.
        <br><br>
        You don't always have to
        be strong.
        `
    },

    7: {
        title: "🤍",
        text: `
        Thank you...
        <br><br>
        for spending time
        in this little corner.
        `
    },

    8: {
        title: "🌌 Final Star",
        text: `
        You found every little secret.
        <br><br>
        Thank you for staying
        until the very end.
        🌙
        `
    }

};

let discoveredStars = 0;

/* ==========================
        OPEN NOTE
========================== */

document.addEventListener("click", (e) => {

    const star = e.target.closest(".star");

    if (!star) return;

    const popup = document.querySelector(".note-popup");
    const content = document.querySelector(".note-content");

    const id = star.dataset.note;

    const note = notes[id];

    if (!note) return;

    content.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.text}</p>
    `;

    popup.classList.add("show");

    if (!star.classList.contains("discovered")) {

        star.classList.add("discovered");

        discoveredStars++;

    }

    if (discoveredStars === 8) {

        const next = document.querySelector(".hidden-next");

        if(next){

            next.classList.add("show");

        }

    }

});

/* ==========================
        CLOSE NOTE
========================== */

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("close-note")) {

        document
            .querySelector(".note-popup")
            .classList.remove("show");

    }

});


/* ==========================================
        FINAL MOON
========================================== */

document.addEventListener("click", (e) => {

    const moon = e.target.closest(".ending-moon");

    if (!moon) return;

    moon.style.pointerEvents = "none";

    moon.style.transform = "scale(1.08)";

    moon.style.boxShadow =
        "0 0 80px rgba(255,245,210,.8),\
         0 0 180px rgba(255,245,210,.45)";

    const whisper = document.querySelector(".final-whisper");

    if (whisper){

        whisper.classList.add("show");

    }

    setTimeout(()=>{

        const btn = document.querySelector(".final-next");

        if(btn){

            btn.classList.add("show");

        }

    },1800);

});


/* ==========================================
        FINAL BUTTON
========================================== */

document.addEventListener("click", (e)=>{

    if(!e.target.classList.contains("final-next")) return;

    currentPage++;

    showPage(currentPage);

});