const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require("dotenv")
dotenv.config()

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');



// Attach Database
const supabaseUrl = 'https://uhzbojshfbbulycnlryc.supabase.co';
const supabaseKey = process.env.API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);


async function fetchArtists() {
    try {
        const { data, error } = await supabase
            .from('artists')
            .select('*');

        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function fetchSongs() {
    try {
        const { data, error } = await supabase
            .from('songs')
            .select('*');

        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
    }
}


async function insertArtistData(Name) {
    try {
        const { data, error } = await supabase
            .from('artists')
            .upsert({ name: Name });

        if (error) throw error;
        console.log('Artist insertion successful');
    } catch (error) {
        console.error(error);
    }

}

async function insertSongData(sName, aName) {
    insertArtistData(aName);
    try {
        const { data: songsTable, error: songsError } = await supabase
            .from('songs')
            .upsert({ songname: sName, artist: aName });
        if (songsError) throw songsError;
        console.log('Song insertion successful');
    } catch (error) {
        console.error(error);
    }
}

app.get('/', async (req, res) => {
    const artistData = await fetchArtists();
    const songData = await fetchSongs();


    let newArtistData= [];
    let newSongData = [];

    // Code for converting the lowercase strings to First letter uppercase 


    // For artists data 
    for (let i = 0; i < artistData.length; i++) {
        let words = artistData[i].name.split(" ");
        for (let i = 0; i < words.length; i++) {
            if (words[i] != '')
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        newArtistData.push(words.join(" "));
    }

    // For song data 
    for(let i = 0;i<songData.length;i++){
        console.log(songData[i].songname);
        let words1 = songData[i].songname.split(" ");
        for (let i = 0; i < words1.length; i++) {
            if (words1[i] != '')
                words1[i] = words1[i][0].toUpperCase() + words1[i].substr(1);
        }
        let words2 = songData[i].artist.split(" ");
        for (let i = 0; i < words2.length; i++) {
            if (words2[i] != '')
                words2[i] = words2[i][0].toUpperCase() + words2[i].substr(1);
        }
        newSongData.push({
            songname:words1.join(" "),
            artist:words2.join(" ")
        });
    }
    res.render('index', { newArtistData, newSongData });
});


app.get('/artists', (req, res) => {
    res.render('artists');
})
app.post('/artists', (req, res) => {
    const Name = req.body.fname.toLowerCase() + " " + req.body.lname.toLowerCase();
    console.log(Name);
    insertArtistData(Name);
})

app.get('/songs', (req, res) => {
    res.render('songs');
})
app.post('/songs', (req, res) => {
    const sName = req.body.sname.toLowerCase();
    const aName = req.body.aname.toLowerCase();
    console.log(sName, aName);
    insertSongData(sName, aName);
})






app.listen(3000, () => {
    console.log("Server running in port 3000");
})