/**
 * 🔥 CHALLENGE 14: Music Playlist Shuffle
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: LinkedList + Set + Sorting
 * Based on: Chapter 1, 3, 4, 9
 * 
 * ============================================================================
 * Build Spotify shuffle! Fair randomization, no artist repeats!
 * ============================================================================
 */

class Song {
    constructor(id, title, artist, duration) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }
}

class SongNode {
    constructor(song) {
        this.song = song;
        this.next = null;
        this.prev = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.recentlyPlayed = new Set();
        this.recentLimit = 20;
        this.size = 0;
    }

    addSong(song) {
        // YOUR CODE HERE
    }

    shuffle() {
        // YOUR CODE HERE
        // Implement Fisher-Yates shuffle
    }

    smartShuffle() {
        // YOUR CODE HERE
        // Don't repeat artists consecutively
    }

    playNext() {
        // YOUR CODE HERE
        // Track recently played
    }

    removeSong(songId) {
        // YOUR CODE HERE
    }

    getPlaylist() {
        // YOUR CODE HERE
        // Return array of songs
    }
}

// TEST
const playlist = new MusicPlaylist();
playlist.addSong(new Song(1, "Song A", "Artist 1", 180));
playlist.addSong(new Song(2, "Song B", "Artist 1", 200));
playlist.addSong(new Song(3, "Song C", "Artist 2", 190));
playlist.addSong(new Song(4, "Song D", "Artist 2", 210));
console.log("Shuffle it up!");
