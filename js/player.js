
// Add a play button to the web page. When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. This will track that album as being played.


class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let jbox = new Jukebox()
const albumArr = [
    ['Operation Ivy', 'Energy'],
    ['Blink 182', 'Dude Ranch'],
    ['New Found Glory', 'Sticks and Stones']
]

let musicList = document.getElementById("musicList")
let album = []
for(let i = 0; i < albumArr.length; i++) {
    musicList.innerHTML += `<option value="album${i+1}">${ albumArr[i][0]} - ${albumArr[i][1]}</option>`
    album[i] = new Album(`${albumArr[i][0]}`, `${albumArr[i][1]}`)
    jbox.addAlbum(album[i])
}

function selectSong(){
    let currentAlbum = document.getElementById("musicList").selectedIndex
    return currentAlbum
}
let favoriteAlbum = document.getElementById("favoriteAlbum")

playButton.addEventListener('click', () => {
    let i = selectSong()
    album[i].play()
    console.log(album[i])
    favoriteAlbum.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
})

favoriteButton.addEventListener('click', () => {
    favoriteAlbum.classList.remove('hide')
    favoriteAlbum.classList.add('show')
})