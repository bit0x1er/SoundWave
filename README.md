# 🎧 Welcome to SoundWave Reality

SoundWave is not just a music player—it's an experience. Dive into a world where music adapts to your mood, powered by the thoughtful design and imagination of **Vinay Mahendre**. Whether you're looking to boost your motivation or relax after a long day, SoundWave has the perfect vibe for you.

---

## 🌟 About the Project
This music player, **SoundWave**, is created by **Vinay Mahendre** for **educational and personal portfolio purposes**. The songs and their visuals are carefully curated to reflect human emotions and moods, enhancing your listening experience. All the songs used in this project are copyrighted and belong to their respective owners. This project is strictly **non-commercial** and is intended to showcase web development skills.

---

## 🎨 Unique Features
- **Mood-Based Categories**: Songs are categorized based on moods to match how you're feeling.
- **Imaginary Characters**: Each song comes with a unique visual—imaginary characters designed to align with the mood of the song.
- **Custom Visualizations**: Includes a custom-built visualizer that syncs with the music being played, enhancing the listening experience.
- **Static Data Handling**: All the song titles, paths, and related metadata are stored in an object within the code itself, without any reliance on external APIs or databases.
- **No API Fetching**: This project avoids the use of fetch() or API calls. All assets (songs and images) are locally stored and directly referenced in the project.
- **responsiveness**: This music player is responsive and compatible with all devices. There might be some minor bugs in responsiveness.

---

## ✨ Why No API?
Using a local object to manage song data simplifies the setup and avoids the complexity of server requests. This approach works best for smaller-scale projects or demos like this one.

---

## 🛠️ Basic Features
- 🎵 Play your favorite songs.
- ⏸ Pause music anytime.
- ⏩ Go to the next song.
- ⏪ Return to the previous song.
- ❤️ Collect and manage your favorite songs in the library.

---

## 📂 Repository Structure
```
/ SoundWave
|-- /Svg
|    |-- /1.svg
|    |-- /2.svg
|-- /css
|    |-- /style.css
|    |-- /utility.css
|-- /ico
|-- img
|-- js
|    |-- /script.js
|-- songs
|-- songsimg
|-- index.html
```

---

## 📂 How It Works

### Static Song Data:
Songs are stored in a JavaScript object like this:

```javascript
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
  ],
};
```

### Player Initialization:
When a user selects a category, the relevant songs are dynamically loaded from this object, and their paths are used to play music.

### Static Assets:
All songs and images are pre-stored in the project directory (`songs/`, `img/` and `/songsimg` folders) and referenced directly.


---

## ❌ Disadvantages

This project might have some bugs. If you encounter any issues, feel free to report me in issues section.

---

## 📄 Disclaimer
This project is for **educational and personal use only**. Here are some important points:

1. **Copyrighted Content**: The songs used in this project are copyrighted and belong to their respective owners.
2. **Imaginary Visuals**: The characters and images associated with the songs are purely fictional and designed to complement the mood of the tracks.
3. **Non-Commercial**: This project is not for any commercial use.
4. **Usage Warning**: You are free to use this music player to listen to songs **only**. Any usage other than playing or listening songs as intended is strictly prohibited.

---

## ✨ Final Note
**"Listen to music and feel your future before it happens."**

Thank you for exploring **SoundWave**. Dive into the beats, enjoy the rhythm, and let the music take you to another world. If you liked this project, feel free to check out my portfolio and stay tuned for more amazing creations.

---

## 🌐 Live Demo
Want to try SoundWave? [Check it out here](https://vinaymahendre.github.io/SoundWave/){:target="_blank"}!

---

Made with ❤️ by **Vinay Mahendre**.

