// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageUrl = document.getElementsByClassName('display-image')[0];
console.log(imageUrl);
let songUrl = document.getElementsByClassName('display-song')[0];
console.log(songUrl);
let artistUrl = document.getElementsByClassName('display-artist')[0];
let linkUrl = document.getElementsByClassName('display-link')[0];

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

/*
let imageArray = ['https://i.scdn.co/image/ab67616d0000b2731799269cdb2d88e373e51829', 'https://m.media-amazon.com/images/I/51fIi1rEGPL._SY1000_.jpg', 'Pressure.png', 'https://upload.wikimedia.org/wikipedia/en/e/e8/Heat_Wave_%28Ahmad_Jamal_album%29.jpg', 'https://upload.wikimedia.org/wikipedia/en/2/22/Palmystery.jpg'];

let songArray = ['Guataca City', 'Reincarnation of a Lovebird', 'Pressure Point', 'April in Paris', 'Song For My Father'];

let artistArray = ['Paquito d’Rivera', 'Charles Mingus', 'Duncan Lamont', 'Ahmad Jamal', 'Victor Wooten'];

let linkArray = ['https://www.youtube.com/watch?v=e5zQaOmZJBM&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6&index=15', 'https://www.youtube.com/watch?v=rijuSUZo-w0&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6&index=15', 'https://www.youtube.com/watch?v=GD7Zq-t-_xc&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6 ', 'https://www.youtube.com/watch?v=Vv7MUtIwxKg&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6 ', 'https://www.youtube.com/watch?v=bS7vUBixOcc',] */


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let guatacaCity = {
  name: "Guataca City",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/9b8078ccc914497f9af6122e8fa9b286.jpg",
  link: "https://www.youtube.com/watch?v=e5zQaOmZJBM&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6&index=15",
  artist: "Paquito d’Rivera" 
};

let reincarnationOfALovebird = {
  name: "Reincarnation of a Lovebird",
  image: "https://m.media-amazon.com/images/I/51fIi1rEGPL._SY1000_.jpg",
  link: "https://www.youtube.com/watch?v=rijuSUZo-w0&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6&index=15",
  artist: "Charles Mingus"
};

let pressurePoint = {
  name: "Pressure Point",
  image: 'Pressure.png',
  link: 'https://www.youtube.com/watch?v=GD7Zq-t-_xc&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6',
  artist: 'Duncan Lamont'
};

let aprilInParis = {
  name: 'April in Paris',
  image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Heat_Wave_%28Ahmad_Jamal_album%29.jpg',
  link: 'https://www.youtube.com/watch?v=Vv7MUtIwxKg&list=PL-MocxyEd37RsnRwsbdN50wKkeEePEZ-6',
  artist: 'Ahmad Jamal'
};

let songForMyFather = {
  name: 'Song For My Father',
  image: 'https://upload.wikimedia.org/wikipedia/en/2/22/Palmystery.jpg',
  link: 'https://www.youtube.com/watch?v=bS7vUBixOcc',
  artist: 'Victor Wooten'
};
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let songInfo = [guatacaCity, reincarnationOfALovebird, pressurePoint, aprilInParis, songForMyFather];



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let userSong = {
    name: '',
    image: '',
    link: '',
    artist: ''
  }
  
  let userImageInput = userSong.image;
  let userSongInput = userSong.name;
  let userArtistInput = userSong.artist;
  let userLinkInput = userSong.link;

  // task 10: use `.push()` to add each input value to the correct array.

  songInfo.push(userSong);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  
  //To-Do & Hint
  //Loop through the new array variable you created on line 73 songInfo
  //

  //image
  for (let i = 0; i < songInfo.length; i++) {
    imageUrl.insertAdjacentHTML('beforeend', `<p> <img src=${songInfo[i].image}> </p>`);
  }

  //song name

  for (let i = 0; i < songInfo.length; i++) {
    songUrl.insertAdjacentHTML('beforeend', `<p>${songInfo[i].name}</p>`)
  }

  //artist
  for (let i = 0; i < songInfo.length; i++) {
    artistUrl.insertAdjacentHTML('beforeend', `<p> ${songInfo[i].artist}</p>`);
  }

  //link
  for (let i = 0; i < songInfo.length; i++) {
    linkUrl.insertAdjacentHTML('beforeend', `<a> ${songInfo[i].link}</a>`);
  }
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
