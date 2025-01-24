
// Project: SoundWave Music Player
// Author: Vinay Mahendre
// Date: 2025
// Description: A simple music player web app.


// I used object to create songs list and their stuff's
const categories = {
  Motivation: [
    {
      title: "Aarambh Hai Prachand X Polozhenie",
      path: "songsimg/Motivation/1.png",
      songpath: "songs/motivational-struggling phase/1.mp3",
    },
    {
      title: "Aarambh Hai Prachand X NF's Hope",
      path: "songsimg/Motivation/2.png",
      songpath: "songs/motivational-struggling phase/2.mp3",
    },
    {
      title: "Eminem - Till Collapse",
      path: "songsimg/Motivation/3.png",
      songpath: "songs/motivational-struggling phase/3.mp3",
    },
    {
      title: "Eminem - Until You Win",
      path: "songsimg/Motivation/4.png",
      songpath: "songs/motivational-struggling phase/4.m4a",
    },
    {
      title: "Get Ready To Fight",
      path: "songsimg/Motivation/5.png",
      songpath: "songs/motivational-struggling phase/5.mp3",
    },
    {
      title: "Happy Nation",
      path: "songsimg/Motivation/6.png",
      songpath: "songs/motivational-struggling phase/6.m4a",
    },
    {
      title: "Nidarr",
      path: "songsimg/Motivation/7.png",
      songpath: "songs/motivational-struggling phase/7.mp3",
    },
    {
      title: "Rakta Charitra - Mila To Marega",
      path: "songsimg/Motivation/8.png",
      //Code written by Vinay Mahendre
      songpath: "songs/motivational-struggling phase/8.m4a",
    },
    {
      title: "Tandav",
      path: "songsimg/Motivation/9.png",
      songpath: "songs/motivational-struggling phase/9.mp3",
    },
    {
      title: "The Tech Thieves - Fake",
      path: "songsimg/Motivation/10.png",
      songpath: "songs/motivational-struggling phase/10.mp3",
    },
    {
      title: "One Step At A Time",
      path: "songsimg/Motivation/11.png",
      songpath: "songs/motivational-struggling phase/11.mp3",
    },
    {
      title: "Unstoppable",
      path: "songsimg/Motivation/12.png",
      songpath: "songs/motivational-struggling phase/12.mp3",
    },
    {
      title: "Victory Antheme",
      path: "songsimg/Motivation/13.png",
      songpath: "songs/motivational-struggling phase/13.m4a",
    },
    {
      title: "Wahi Ravan Hu Mai",
      path: "songsimg/Motivation/14.png",
      songpath: "songs/motivational-struggling phase/14.mp3",
    },
    {
      title: "You Are My Enemy",
      path: "songsimg/Motivation/15.png",
      songpath: "songs/motivational-struggling phase/15.mp3",
    },
  ],
  Money: [
    {
      title: "Skyfall",
      path: "songsimg/Money/1.png",
      songpath: "songs/Money-motivation/1.mp3",
    },
    {
      title: "Billionaire Theme Song",
      path: "songsimg/Money/2.png",
      songpath: "songs/Money-motivation/2.mp3",
    },
    {
      title: "Millionaire",
      path: "songsimg/Money/3.png",
      songpath: "songs/Money-motivation/3.mp3",
    },
    {
      title: "Motha Paisa",
      path: "songsimg/Money/4.png",
      songpath: "songs/Money-motivation/4.m4a",
    },
    {
      title: "Paisa",
      path: "songsimg/Money/5.png",
      songpath: "songs/Money-motivation/5.mp3",
    },
    {
      title: "Paisa Hai Toh",
      path: "songsimg/Money/6.png",
      songpath: "songs/Money-motivation/6.mp3",
    },
    {
      title: "Top G Theme Song",
      path: "songsimg/Money/7.png",
      songpath: "songs/Money-motivation/7.mp3",
    },
  ],
  Sad: [
    {
      title: "Beach House",
      path: "songsimg/Sad/1.png",
      songpath: "songs/Sad/1.mp3",
      //Code written by Vinay Mahendre
    },
    {
      title: "Mat Kar Maya Ka Ahankar",
      path: "songsimg/Sad/2.png",
      songpath: "songs/Sad/2.mp3",
    },
    {
      title: "Oneheart - Snowfall",
      path: "songsimg/Sad/3.png",
      songpath: "songs/Sad/3.mp3",
    },
    {
      title: "Qasam Kha Li Mene",
      path: "songsimg/Sad/4.png",
      songpath: "songs/Sad/4.mp3",
    },
    {
      title: "Past Lives",
      path: "songsimg/Sad/5.png",
      songpath: "songs/Sad/5.mp3",
    },
    {
      title: "Memory Reboot",
      path: "songsimg/Sad/6.png",
      songpath: "songs/Sad/6.mp3",
    },
    { title: "Waste", path: "songsimg/Sad/7.png", songpath: "songs/Sad/7.mp3" },
    {
      title: "Zara Zara Bahekta Hai",
      path: "songsimg/Sad/8.png",
      songpath: "songs/Sad/8.mp3",
    },
  ],
  FunkWin: [
    {
      title: "Avangard",
      path: "songsimg/Funk/1.png",
      songpath: "songs/funk/1.mp3",
      //Code written by Vinay Mahendre
    },
    {
      title: "Empire - Orkyzek",
      path: "songsimg/Funk/2.png",
      songpath: "songs/funk/2.m4a",
    },
    {
      title: "Jujalarim",
      path: "songsimg/Funk/3.png",
      songpath: "songs/funk/3.mp3",
    },
    {
      title: "Histed, TXVSTERPLAYA",
      path: "songsimg/Funk/4.png",
      songpath: "songs/funk/4.mp3",
    },
    {
      title: "Kerosene",
      path: "songsimg/Funk/5.png",
      songpath: "songs/funk/5.mp3",
    },
    {
      title: "Light Yagami",
      path: "songsimg/Funk/6.png",
      songpath: "songs/funk/6.mp3",
    },
    {
      title: "Sleepwalker",
      path: "songsimg/Funk/7.png",
      songpath: "songs/funk/7.mp3",
    },
    {
      title: "Tourner Dans Le Vide",
      path: "songsimg/Funk/8.png",
      songpath: "songs/funk/8.mp3",
    },
    {
      title: "Vois Sur Ton Chemin",
      path: "songsimg/Funk/9.png",
      songpath: "songs/funk/9.mp3",
    },
    {
      title: "vyral - h+3+яд7lucjlot6",
      path: "songsimg/Funk/10.png",
      songpath: "songs/funk/10.m4a",
    },
    {
      title: "GLXXMSTRIDER - Don't Stop X Arima",
      path: "songsimg/Funk/11.png",
      songpath: "songs/funk/11.mp3",
    },
  ],
  Monster: [
    {
      title: "Bad Guy",
      path: "songsimg/Monster/1.png",
      songpath: "songs/monster/1.mp3",
    },
    {
      title: "Criminal",
      path: "songsimg/Monster/2.png",
      songpath: "songs/monster/2.mp3",
    },
    {
      title: "Joker X Harley Gangsta",
      path: "songsimg/Monster/3.png",
      songpath: "songs/monster/3.mp3",
    },
    {
      title: "Marco Bgm",
      path: "songsimg/Monster/4.png",
      songpath: "songs/monster/4.mp3",
    },
    {
      title: "Way Down We Go",
      path: "songsimg/Monster/5.png",
      songpath: "songs/monster/5.mp3",
    },
    {
      title: "Rag'nBone Man - Human",
      path: "songsimg/Monster/6.png",
      songpath: "songs/monster/6.mp3",
    },
    {
      title: "Rolex",
      path: "songsimg/Monster/7.png",
      songpath: "songs/monster/7.mp3",
    },
  ],
  Success: [
    {
      title: "Stereo Love",
      path: "songsimg/Afsuccess/1.png",
      songpath: "songs/success/2.mp3",
    },
    {
      title: "On My Own",
      path: "songsimg/Afsuccess/2.png",
      songpath: "songs/success/3.mp3",
    },
    {
      title: "Pasoori",
      path: "songsimg/Afsuccess/3.png",
      songpath: "songs/success/4.mp3",
    },
    {
      title: "All Black",
      path: "songsimg/Afsuccess/4.png",
      songpath: "songs/success/5.mp3",
    },
    {
      title: "Brown Rang",
      path: "songsimg/Afsuccess/5.png",
      songpath: "songs/success/6.mp3",
    },
    {
      title: "Dard Hua X Nain Tere",
      path: "songsimg/Afsuccess/6.png",
      songpath: "songs/success/7.mp3",
      //Code written by Vinay Mahendre
    },
    {
      title: "Happy Nation",
      path: "songsimg/Afsuccess/7.png",
      songpath: "songs/success/1.m4a",
    },
    {
      title: "Har Funn Maula",
      path: "songsimg/Afsuccess/8.png",
      songpath: "songs/success/8.mp3",
    },
    {
      title: "Amplifier",
      path: "songsimg/Afsuccess/9.png",
      songpath: "songs/success/9.mp3",
    },
    {
      title: "Jaguar",
      path: "songsimg/Afsuccess/10.png",
      songpath: "songs/success/10.mp3",
    },
    {
      title: "King Shit",
      path: "songsimg/Afsuccess/11.png",
      songpath: "songs/success/11.mp3",
    },
    {
      title: "Long Drive Le Chal",
      path: "songsimg/Afsuccess/12.png",
      songpath: "songs/success/12.mp3",
    },
    {
      title: "Me And The Devil",
      path: "songsimg/Afsuccess/13.png",
      songpath: "songs/success/13.mp3",
    },
    {
      title: "Cheri Cheri Lady",
      path: "songsimg/Afsuccess/14.png",
      songpath: "songs/success/14.mp3",
    },
    {
      title: "Proper Patola",
      path: "songsimg/Afsuccess/15.png",
      songpath: "songs/success/15.mp3",
    },
    {
      title: "Stromae - Papaoutai",
      path: "songsimg/Afsuccess/16.png",
      songpath: "songs/success/16.mp3",
    },
    {
      title: "Sunny Deol Si Body",
      path: "songsimg/Afsuccess/17.png",
      songpath: "songs/success/17.mp3",
    },
    {
      title: "The Beauty Of Succession",
      path: "songsimg/Afsuccess/18.png",
      songpath: "songs/success/18.mp3",
    },
    {
      title: "Top G Theme Song",
      path: "songsimg/Afsuccess/19.png",
      songpath: "songs/success/19.mp3",
    },
    {
      title: "Tuesday",
      path: "songsimg/Afsuccess/20.png",
      songpath: "songs/success/20.mp3",
    },
    {
      title: "Vigdiyan Heeran",
      path: "songsimg/Afsuccess/21.png",
      songpath: "songs/success/21.mp3",
    },
  ],
  Hero: [
    {
      title: "Attack On Titan",
      path: "songsimg/Hero/1.png",
      songpath: "songs/hero/1.mp3",
    },
    {
      title: "Crystal Castles - Empathy",
      path: "songsimg/Hero/2.png",
      songpath: "songs/hero/2.mp3",
    },
    {
      title: "Legends Never Die",
      path: "songsimg/Hero/3.png",
      songpath: "songs/hero/3.mp3",
      //Code written by Vinay Mahendre
    },
    {
      title: "The Perfect Girl",
      path: "songsimg/Hero/4.png",
      songpath: "songs/hero/4.mp3",
    },
    {
      title: "SLAVA X ASTA",
      path: "songsimg/Hero/5.png",
      songpath: "songs/hero/5.mp3",
    },
    {
      title: "Crossfire",
      path: "songsimg/Hero/6.png",
      songpath: "songs/hero/6.mp3",
    },
    {
      title: "The Lost Soul Down X Lost Soul",
      path: "songsimg/Hero/7.png",
      songpath: "songs/hero/7.mp3",
    },
    { title: "War", path: "songsimg/Hero/8.png", songpath: "songs/hero/8.mp3" },
    {
      title: "Who Is She X The Perfect Girl",
      path: "songsimg/Hero/9.png",
      songpath: "songs/hero/9.mp3",
    },
  ],
};

const categoryCards = document.querySelectorAll(".card");
const categoryBox = document.querySelector(".cate-play");
const musicbackbtn = document.querySelector(".category");
const mainCategoryPage = document.querySelector(".main");

let currentAudio = null;
let currentSongCard = null;
let currentSongtime = 0;
let isPlaying = false;
let lastPausedTime = 0;
let lastplayedsong = null;
let lastplay = null;
let lastmaincard = null;
lastccc = null;
lastcc = null;

categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const cloneplayAnimation = card.querySelector(".cloneplayAnimation");
    if (cloneplayAnimation) {
      cloneplayAnimation.style.opacity = 0;
      cloneplayAnimation.remove();
    }

    const category = card.getAttribute("data-category");
    lastmaincard = card.id;
    lastccc = lastcc;
    sessionStorage.setItem("selectedCategory", category);
    sessionStorage.setItem("page", "songs");
    loadSongs(category);
    //Code written by Vinay Mahendre
  });
});

window.addEventListener("load", () => {
  const savedCategory = sessionStorage.getItem("selectedCategory");
  const currentPage = sessionStorage.getItem("page");

  if (currentPage === "songs" && savedCategory) {
    loadSongs(savedCategory);
  } else if (currentPage === "category") {
    categoryBox.style.display = "flex";
  } else {
    categoryBox.style.display = "flex";
  }
});

function loadSongs(category) {
  musicbackbtn.innerHTML = "";
  categoryBox.style.display = "none";

  const container = document.createElement("div");
  container.classList.add("backbtncontainer");

  const backbtn = document.createElement("div");
  backbtn.classList.add("arrbox");
  backbtn.innerHTML = `<img src="Svg/arrow.svg" alt="arrow-logo" />
    <h4>Home</h4>`;

  const categoryName = document.createElement("h3");
  categoryName.innerHTML = `You Are In ${category} Phase`;

  container.appendChild(backbtn);
  container.appendChild(categoryName);
  musicbackbtn.appendChild(container);

  const seccpage = document.createElement("div");
  seccpage.classList.add("secpage");

  const playAnimation0 = document.createElement("div");
  playAnimation0.classList.add("playAnimation0");
  playAnimation0.innerHTML = `<div class="now playing" id="music">
<span class="bar n1">A</span>
<span class="bar n2">B</span>
<span class="bar n3">c</span>
<span class="bar n4">D</span>
<span class="bar n5">E</span>
<span class="bar n6">F</span>
<span class="bar n7">G</span>
<span class="bar n8">H</span>
</div>`;

  const cloneplayAnimation = playAnimation0.cloneNode(true);
  cloneplayAnimation.classList.add("cloneplayAnimation");
  cloneplayAnimation.classList.remove("playAnimation0");

  const whatcontainer = document.createElement("div");
  whatcontainer.classList.add("whatbox");
  const selectedCard = document.querySelector(
    `.card[data-category="${category}"]`
  );
  const cardClone = selectedCard.cloneNode(true);

  const cardClonemain = cardClone.classList.add("backcardclone");
  whatcontainer.appendChild(cardClone);

  seccpage.appendChild(whatcontainer);

  const songsContainer = document.createElement("div");
  songsContainer.classList.add("songs-container");
  seccpage.appendChild(songsContainer);

  mainCategoryPage.appendChild(seccpage);

  songsContainer.innerHTML = "<p>Loading Experience...</p>";

  cardClone.appendChild(playAnimation0);

  setTimeout(() => {
    songsContainer.innerHTML = "";

    const songs = categories[category];

    songs.forEach((song, index) => {
      const bothbox = document.createElement("div");
      bothbox.classList.add("bothbox");
      const songCard = document.createElement("div");
      songCard.classList.add("songcard");
      songCard.setAttribute("data-index", index);
      songCard.setAttribute("id", "songcardno" + index);
      songCard.appendChild(bothbox);
      //Code written by Vinay Mahendre
      const playAnimation = document.createElement("div");
      playAnimation.classList.add("playAnimation");
      playAnimation.innerHTML = `<div class="now playing" id="music">
    <span class="bar n1">A</span>
    <span class="bar n2">B</span>
    <span class="bar n3">c</span>
    <span class="bar n4">D</span>
    <span class="bar n5">E</span>
    <span class="bar n6">F</span>
    <span class="bar n7">G</span>
    <span class="bar n8">H</span>
    </div>`;
      songCard.appendChild(playAnimation);

      bothbox.innerHTML = `<img class="songImg" src="${song.path}" alt="songImg" />
        <strong>${song.title}</strong>`;

      const audio = new Audio();
      audio.src = song.songpath;
      songCard.addEventListener("click", () => {
        let clickedIndex = songCard.getAttribute("data-index");

        lastplayedsong = songCard.id;

        if (lastplayedsong) {
          playmotion(lastplayedsong);
        }
        const songcon = document.querySelector(".songs-container");
        if (songcon) {
          songcon.remove();
        }

        const thirdPage = document.createElement("div");
        thirdPage.classList.add("thirdpage");

        const playerbox = document.createElement("div");
        playerbox.classList.add("playerbox");
        thirdPage.appendChild(playerbox);

        const liked = document.createElement("div");
        liked.classList.add("liked");
        liked.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="mySVG" preserveAspectRatio="xMidYMid meet">
    <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="none" stroke="#00fff7" stroke-width="0.5"/>
</svg>
`;

        const imgbox = document.createElement("div");
        imgbox.classList.add("imgbox");
        imgbox.innerHTML = ` <div class="anni"> <canvas id="visualizer"></canvas> <img class="rounded image1" src="${song.path}" alt="songimg" /></div>`;
        imgbox.appendChild(liked);
        playerbox.appendChild(imgbox);

        const playbox = document.createElement("div");
        playbox.classList.add("playbox");

        const seekbardiv = document.createElement("div");
        seekbardiv.classList.add("seekbardiv");
        playbox.appendChild(seekbardiv);

        const seekbar = document.createElement("div");
        seekbar.classList.add("seekbar");
        seekbardiv.appendChild(seekbar);

        const circle = document.createElement("div");
        circle.classList.add("circle");
        seekbar.appendChild(circle);

        seekbardiv.addEventListener("click", (e) => {
          let percent =
            (e.offsetX / e.target.getBoundingClientRect().width) * 100;
          circle.style.left = percent + "%";
          audio.currentTime = (audio.duration * percent) / 100;
        });

        const pbox = document.createElement("div");
        //Code written by Vinay Mahendre
        pbox.classList.add("pbox");
        playbox.appendChild(pbox);

        const songtime = document.createElement("div");
        songtime.classList.add("songtime");
        songtime.innerHTML = `00:00/00:00`;

        const ppbox = document.createElement("div");
        ppbox.classList.add("ppbox");

        const leftplay = document.createElement("img");
        leftplay.classList.add("leftplay");
        leftplay.src = "Svg/left.svg";

        leftplay.addEventListener("click", () => {
          if (clickedIndex > 0) {
            clickedIndex--;
            let song = songs[clickedIndex];
            nextAndPrevious(song, clickedIndex);
          }
        });

        const playPauseButton = document.createElement("img");
        playPauseButton.classList.add("play");
        playPauseButton.src = "Svg/play.svg";

        const rightplay = document.createElement("img");
        rightplay.classList.add("rightplay");
        rightplay.src = "Svg/right.svg";

        rightplay.addEventListener("click", () => {
          if (clickedIndex < songs.length - 1) {
            clickedIndex++;
            let song = songs[clickedIndex];
            nextAndPrevious(song, clickedIndex);
          }
        });

        const songname = document.createElement("div");
        songname.classList.add("songname");
        //Code written by Vinay Mahendre
        songname.innerHTML = `<h4>${song.title}</h4>`;

        if (audio.currentTime > 0 && audio.played) {
          // return;
          playPauseButton.src = "Svg/pause.svg";
        } else {
          if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            audio.load();
            audio.play();
            playPauseButton.src = "Svg/pause.svg";
            isPlaying = true;
          }
        }

        if (audio.currentTime > 0 && audio.paused) {
          audio.pause();
          playPauseButton.src = "Svg/play.svg";
        } else {
          audio.play();
          playPauseButton.src = "Svg/pause.svg";

          isPlaying = true;
          playmotion0();
        }

        audio.onended = function () {
          audio.pause();
          playPauseButton.src = "Svg/play.svg";
          stopmotion0();
          stopmotion(lastplayedsong);
          stopmotion(songCard.id);
          isPlaying = false;
        };

        audio.onplay = function () {
          audio.play();
          playPauseButton.src = "Svg/pause.svg";
          playmotion0();
          playmotion(lastplayedsong);
          playmotion(songCard.id);

          isPlaying = true;
        };
        audio.onpause = function () {
          audio.pause();
          stopmotion0();
          stopmotion(lastplayedsong);
          stopmotion(songCard.id);
          playPauseButton.src = "Svg/play.svg";

          isPlaying = false;
        };

        playPauseButton.addEventListener("click", () => {
          //Code written by Vinay Mahendre
          if (isPlaying) {
            currentAudio.pause();

            playPauseButton.src = "Svg/play.svg";
            isPlaying = false;

            stopmotion0();
            stopmotion(lastplayedsong);
            stopmotion(songCard.id);
          } else {
            currentAudio.play();

            playPauseButton.src = "Svg/pause.svg";
            isPlaying = true;
            playmotion0();
            playmotion(lastplayedsong);
            playmotion(songCard.id);
          }
        });

        audio.addEventListener("timeupdate", () => {
          document.querySelector(
            ".songtime"
          ).innerHTML = `${convertSecondsToTime(
            audio.currentTime
          )}/${convertSecondsToTime(audio.duration)}`;
          document.querySelector(".circle").style.left =
            (audio.currentTime / audio.duration) * 100 + "%";
        });

        pbox.appendChild(songtime);
        pbox.appendChild(ppbox);
        ppbox.appendChild(leftplay);
        ppbox.appendChild(playPauseButton);
        ppbox.appendChild(rightplay);
        pbox.appendChild(songname);
        playerbox.appendChild(playbox);

        const sec = document.querySelector(".secpage");
        sec.appendChild(thirdPage);
        const thirdp = document.querySelector(".thirdpage");

        const innsvg = cardClone.querySelector(".inner-svg");
        innsvg.remove();

        const text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = `Back`;

        cardClone.appendChild(text);

        cardClone.addEventListener("click", () => {
          thirdp.remove();
          sec.appendChild(songcon);
          text.remove();
          cardClone.appendChild(innsvg);

          lastplay = lastplayedsong;

          audio.onended = function () {
            audio.pause();

            stopmotion0();
            stopmotion(lastplayedsong);
            isPlaying = false;
          };

          audio.onplay = function () {
            audio.play();
            playmotion0();
            playmotion(lastplayedsong);
            isPlaying = true;
          };

          audio.onpause = function () {
            audio.pause();
            stopmotion0();
            stopmotion(lastplayedsong);

            isPlaying = false;
          };

          if (audio.played) {
            backbtn.addEventListener("click", () => {
              if (audio.played) {
                document
                  .getElementById(lastmaincard)
                  .appendChild(cloneplayAnimation).style.opacity = 1;
              }
            });
          }
        });

        currentAudio = audio;
        currentSongCard = songCard;
        currentSongtime = 0;

        startVisualizer(audio);

        rightplay.addEventListener("click", () => {
          let songid = `songcardno${clickedIndex}`;

          if (songid !== lastplayedsong) {
            cardClone.addEventListener("click", () => {
              document
                .getElementById(lastplayedsong)
                .querySelector(".playAnimation").style.opacity = 0;
              document
                .getElementById("songcardno" + clickedIndex)
                .querySelector(".playAnimation").style.opacity = 1;
            });
          }
        });

        leftplay.addEventListener("click", () => {
          let songid = `songcardno${clickedIndex}`;
          if (songid !== lastplayedsong) {
            cardClone.addEventListener("click", () => {
              document
                .getElementById(lastplayedsong)
                .querySelector(".playAnimation").style.opacity = 0;
              document
                .getElementById("songcardno" + clickedIndex)
                .querySelector(".playAnimation").style.opacity = 1;
            });
          }
        });

        if (lastplay !== lastplayedsong) {
          lastcard = lastplay;
          cardClone.addEventListener("click", () => {
            document
              .getElementById(lastcard)
              .querySelector(".playAnimation").style.opacity = 0;
          });
        }

        rightplay.addEventListener("click", () => {
          let songid = `songcardno${clickedIndex}`;
          cardClone.addEventListener("click", () => {
            if (songid !== lastplayedsong) {
              cardClone.addEventListener("click", () => {
                document
                  .getElementById(songid)
                  .querySelector(".playAnimation").style.opacity = 0;
              });
            }
          });
        });

        leftplay.addEventListener("click", () => {
          let songid = `songcardno${clickedIndex}`;
          cardClone.addEventListener("click", () => {
            if (songid !== lastplayedsong) {
              cardClone.addEventListener("click", () => {
                document
                  .getElementById(songid)
                  .querySelector(".playAnimation").style.opacity = 0;
              });
            }
          });
        });

        if (audio.played) {
          playPauseButton.addEventListener("click", () => {
            if (audio.paused) {
              stopmotion(lastplayedsong);
              cardClone.addEventListener("click", () => {
                stopmotion(lastplayedsong);
              });
            } else if (audio.played) {
              cardClone.addEventListener("click", () => {
                playmotion(lastplayedsong);
              });
            }
          });
        }

        if (audio.paused) {
          playPauseButton.addEventListener("click", () => {
            if (audio.played) {
              playmotion(lastplayedsong);
              cardClone.addEventListener("click", () => {
                playmotion(lastplayedsong);
              });
            } else if (audio.paused) {
              cardClone.addEventListener("click", () => {
                stopmotion(lastplayedsong);
              });
            }
          });
        }
        if (audio.played) {
          if (audio.played) {
            playmotion0();
            cardClone.addEventListener("click", () => {
              if (audio.played) {
                playmotion(lastplayedsong);
              }
            });
          }
        }

        if (audio.paused) {
          if (audio.paused) {
            stopmotion0();
            cardClone.addEventListener("click", () => {
              stopmotion(lastplayedsong);
            });
          }
        }

        backbtn.addEventListener("click", () => {
          playAnimation0.style.opacity = 0;
          audio.pause();
          currentAudio.pause();
          stopmotion(lastplayedsong);

          document
            .getElementById(lastmaincard)
            .appendChild(cloneplayAnimation).style.opacity = 1;
        });

        if (lastplay !== lastplayedsong) {
          lastcard = lastplay;

          document
            .getElementById(lastcard)
            .querySelector(".playAnimation").style.opacity = 0;
        }

        const likedImg = document.querySelector(".liked svg");
        likedImg.classList.add("likedno" + index);
        const likedids = `.likedno${index}`;
        const likes = document.querySelector(likedids);

        likedImg.addEventListener("click", () => {
          likedmusic();
          function likedmusic() {
            const path = likes.querySelector("path");

            if (path.getAttribute("fill") === "none") {
              path.setAttribute("fill", "#00fff7");

              clonedSongCard = songCard.cloneNode(true);
              clonedSongCard.classList.add("clonedSongCard");
              clonedSongCard.classList.add("clonedSongCard" + index);
              //Code written by Vinay Mahendre
              const likedSongs = document.querySelector(".likedSongs");

              const h4e = likedSongs.querySelector("h4");
              if (h4e) {
                h4e.remove();
              }
              likedSongs.appendChild(clonedSongCard);

              localStorage.setItem(likedids, "#00fff7");
              localStorage.setItem(
                "clonedSongCard" + index,
                clonedSongCard.outerHTML
              );
            } else {
              path.setAttribute("fill", "none");

              const clonedSongCard = document.querySelector(
                `.clonedSongCard${index}`
              );
              if (clonedSongCard) {
                clonedSongCard.remove();
              }

              localStorage.setItem(likedids, "none");
              localStorage.removeItem("clonedSongCard" + index);

              const likedSongs = document.querySelector(".likedSongs");
              if (!likedSongs.querySelector(".clonedSongCard")) {
                likedSongs.innerHTML = `<h4>No Experience Collected</h4>`;
              }
            }
          }
        });

        const savedColor = localStorage.getItem(likedids);

        if (savedColor) {
          document
            .querySelector(likedids)
            .querySelector("path")
            .setAttribute("fill", savedColor);
        } else {
          document
            .querySelector(likedids)
            .querySelector("path")
            .setAttribute("fill", "none");
        }
      });
      songsContainer.appendChild(songCard);
    });
  }, 500);

  backbtn.addEventListener("click", () => {
    lastcc = lastmaincard;

    loadCategories();

    document
      .getElementById(lastmaincard)
      .appendChild(cloneplayAnimation).style.opacity = 1;

    if (lastccc !== lastcc) {
      document
        .getElementById(lastccc)
        .querySelector(".cloneplayAnimation").style.opacity = 0;
    }
  });

  sessionStorage.setItem("page", "songs");
}

document.querySelector(".logo").addEventListener("click", () => {
  loadCategories();
});
document.querySelector(".ac").addEventListener("click", () => {
  loadCategories();
});

function nextAndPrevious(song, songindex) {
  const songCard = document.querySelector(".songcard");

  const imgbox = document.querySelector(".imgbox");

  imgbox.innerHTML = `<div class="anni"> <canvas id="visualizer"></canvas> <img class="rounded image1" src="${song.path}" alt="songimg" /></div>`;
  const liked = document.createElement("div");
  liked.classList.add("liked");
  //Code written by Vinay Mahendre
  liked.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="mySVG" preserveAspectRatio="xMidYMid meet">
<path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="none" stroke="#00fff7" stroke-width="0.5"/>
</svg>
`;
  imgbox.appendChild(liked);

  const songname = document.querySelector(".songname");
  songname.innerHTML = `<h4>${song.title}</h4>`;

  const playPauseButton = document.querySelector(".play");

  const audio = new Audio();
  audio.src = song.songpath;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    //Code written by Vinay Mahendre
  }

  currentAudio = audio;

  audio.play();
  startVisualizer(audio);
  playPauseButton.src = "Svg/pause.svg";
  isPlaying = true;

  audio.onended = function () {
    audio.pause();
    playPauseButton.src = "Svg/play.svg";
    stopmotion0();
    stopmotion(lastplayedsong);
    isPlaying = false;
  };

  audio.onplay = function () {
    audio.play();
    playPauseButton.src = "Svg/pause.svg";
    playmotion0();
    playmotion(lastplayedsong);
    playmotion(songCard.id);
    isPlaying = true;
  };
  audio.onpause = function () {
    audio.pause();
    stopmotion0();
    stopmotion(lastplayedsong);
    playPauseButton.src = "Svg/play.svg";
    stopmotion(songCard.id);
    isPlaying = false;
  };

  audio.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${convertSecondsToTime(
      audio.currentTime
    )}/${convertSecondsToTime(audio.duration)}`;
    document.querySelector(".circle").style.left =
      (audio.currentTime / audio.duration) * 100 + "%";
  });

  const seekbardiv = document.querySelector(".seekbardiv");
  const circle = document.querySelector(".circle");
  seekbardiv.addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    circle.style.left = percent + "%";
    //Code written by Vinay Mahendre
    audio.currentTime = (audio.duration * percent) / 100;
  });

  currentAudio.ontimeupdate = () => {
    let percent = (audio.currentTime / audio.duration) * 100;
    circle.style.left = percent + "%";
  };

  const likedImg = document.querySelector(".liked svg");
  likedImg.classList.add("likedno" + songindex);
  const likedids = `.likedno${songindex}`;
  const likes = document.querySelector(likedids);

  likedImg.addEventListener("click", () => {
    const path = likes.querySelector("path");

    if (path.getAttribute("fill") === "none") {
      path.setAttribute("fill", "#00fff7");

      let shortcut = document.createElement("div");
      shortcut.classList.add("shortcut" + songindex);
      shortcut.innerHTML = `<div class="songcard clonedSongCard clonedSongCard${songindex}" data-index="${songindex}" id="songcardno${songindex}"><div class="bothbox"><img class="songImg" src="${song.path}" alt="songImg">
        <strong>${song.title}</strong></div><div class="playAnimation" style="opacity: 0;"><div class="now playing" id="music">
    <span class="bar n1">A</span>
    <span class="bar n2">B</span>
    <span class="bar n3">c</span>
    <span class="bar n4">D</span>
    <span class="bar n5">E</span>
    <span class="bar n6">F</span>
    <span class="bar n7">G</span>
    <span class="bar n8">H</span>
    </div></div></div>`;

      const likedSongs = document.querySelector(".likedSongs");

      const h4e = likedSongs.querySelector("h4");
      if (h4e) {
        h4e.remove();
      }
      likedSongs.appendChild(shortcut);

      localStorage.setItem(likedids, "#00fff7");
      localStorage.setItem("clonedSongCard" + songindex, shortcut.outerHTML);
    } else {
      path.setAttribute("fill", "none");

      const clonedSongCard = document.querySelector(`.shortcut${songindex}`);
      if (clonedSongCard) {
        clonedSongCard.remove();
      }

      localStorage.setItem(likedids, "none");
      localStorage.removeItem("clonedSongCard" + songindex);

      const likedSongs = document.querySelector(".likedSongs");
      if (!likedSongs.querySelector(".clonedSongCard")) {
        likedSongs.innerHTML = `<h4>No Experience Collected</h4>`;
      }
    }
  });

  const savedColor = localStorage.getItem(likedids);

  if (savedColor) {
    document
      .querySelector(likedids)
      .querySelector("path")
      .setAttribute("fill", savedColor);
  } else {
    document
      .querySelector(likedids)
      .querySelector("path")
      .setAttribute("fill", "none");
  }
}
//Code written by Vinay Mahendre
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
  }
});

function closeDisclaimer() {
  document.getElementById("disclaimerModal").style.display = "none";
}

function startVisualizer(audio) {
  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");

  const radius = 150;
  const padding = 50;
  const canvasSize = (radius + padding + 100) * 2;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const img = document.querySelector(".image1");
  if (!img) {
    console.error(
      'Image element not found. Ensure the image exists with the class "image1".'
    );
    return;
  }

  let audioContext, analyser, dataArray;

  if (!audio.audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audio.audioContext = audioContext;
    audio.analyser = analyser;
  } else {
    audioContext = audio.audioContext;
    analyser = audio.analyser;
  }

  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const averageAmplitude =
      dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

    const imageScale = 1 + averageAmplitude / 400;
    img.style.transform = `scale(${imageScale})`;

    ctx.beginPath();
    for (let i = 0; i < dataArray.length; i++) {
      const angle = (i / dataArray.length) * Math.PI * 2;
      const barHeight = dataArray[i] * 1.5;

      const xStart = centerX + Math.cos(angle) * radius;
      const yStart = centerY + Math.sin(angle) * radius;

      const xEnd = centerX + Math.cos(angle) * (radius + barHeight);
      const yEnd = centerY + Math.sin(angle) * (radius + barHeight);
      //Code written by Vinay Mahendre

      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
    }
    ctx.strokeStyle = "#0ff";
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(animate);
  }

  animate();
}

const openPopup = document.querySelector(".popup3");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

const openPopup1 = document.querySelector("button");
const popup1 = document.getElementById("popup1");
const closePopup1 = document.getElementById("closePopup1");

openPopup1.addEventListener("click", (e) => {
  e.preventDefault();
  popup1.style.display = "flex";
});

closePopup1.addEventListener("click", () => {
  popup1.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup1) {
    popup1.style.display = "none";
  }
});

const openPopup2 = document.querySelector(".butt");

openPopup2.addEventListener("click", (e) => {
  e.preventDefault();
  popup1.style.display = "flex";
});

closePopup1.addEventListener("click", () => {
  popup1.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup1) {
    popup1.style.display = "none";
  }
});

function convertSecondsToTime(seconds) {
  const wholeSeconds = Math.floor(seconds);
  //Code written by Vinay Mahendre

  const minutes = Math.floor(wholeSeconds / 60);
  const remainingSeconds = wholeSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function playmotion0() {
  const what = document.querySelector(".whatbox");
  const playAnimation = what.querySelector(".playAnimation0");

  playAnimation.style.opacity = 1;
}

function stopmotion0() {
  const what = document.querySelector(".whatbox");

  const playAnimation = what.querySelector(".playAnimation0");

  playAnimation.style.opacity = 0;
}

function playmotion(id) {
  const songCard1 = document.getElementById(id);

  const playAnimation = songCard1.querySelector(".playAnimation");

  playAnimation.style.opacity = 1;
}

function stopmotion(id) {
  const songCard1 = document.getElementById(id);

  const playAnimation = songCard1.querySelector(".playAnimation");

  playAnimation.style.opacity = 0;
}

function loadCategories() {
  const secPage = document.querySelector(".secpage");

  secPage.remove();
  categoryBox.style.display = "flex";
  musicbackbtn.innerHTML = "";
  musicbackbtn.innerHTML = "<h3>Experience category</h3>";

  sessionStorage.setItem("page", "category");
}

const hum = document.querySelector(".hum");

hum.addEventListener("click", () => {
  document.querySelector(".left").style.left = "0";
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  document.querySelector(".left").style.left = "-142%";
});

window.addEventListener("beforeunload", () => {
  if (currentAudio) {
    currentSongtime = currentAudio.currentTime;
  }
});

window.addEventListener("load", () => {
  if (currentAudio && currentSongtime > 0) {
    currentAudio.currentTime = currentSongtime;
    currentAudio.play();
    //Code written by Vinay Mahendre
    playPauseButton.src = "Svg/pause.svg";
  }
});

window.addEventListener("popstate", () => {
  sessionStorage.removeItem("selectedCategory");
  sessionStorage.setItem("page", "category");
  loadCategories();
});

window.addEventListener("DOMContentLoaded", () => {
  const likedSongs = document.querySelector(".likedSongs");

  likedSongs.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("clonedSongCard")) {
      const clonedSongCard = localStorage.getItem(key);

      if (clonedSongCard) {
        likedSongs.innerHTML += clonedSongCard;
      }
    }
  }

  const playAnimations = document.querySelectorAll(".playAnimation");
  playAnimations.forEach((animation) => {
    animation.style.opacity = "0";
  });

  if (!likedSongs.innerHTML.trim()) {
    likedSongs.innerHTML = `<h4>No Experience Collected</h4>`;
  }
});
//Code written by Vinay Mahendre