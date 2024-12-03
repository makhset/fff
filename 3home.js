
const artists = [
    {
      name: "Michael Jackson",
      songs: ["Thriller", "Billie Jean", "Beat It"]
    },
    {
      name: "Billie Eilish",
      songs: ["Bad Guy", "Happier Than Ever", "Everything I Wanted"]
    },
    {
      name: "Kairat Nurtas",
      songs: ["Ainalayin", "Shuakty Kun", "Ozim Men"]
    }
  ];
  
  artists[2].songs[1] = "Baika";

  console.log(`${artists[0].name}'s last song: ${artists[0].songs[artists[0].songs.length - 1]}`);
  

  const shortSongs = artists[1].songs.filter(song => song.length <= 6);
  console.log(`Short songs by Billie Eilish: ${shortSongs.join(", ")}`);