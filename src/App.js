import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import MusicTable from './Components/MusicTable';



  


function App(){

  const [songs, setSongs]=useState([])
  useEffect(()=>{getAllSongs()},[])
async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data.songs)
    console.log(response.data)
  
  let songs = songs.map()
  
  }


  








   return (
    <div className="App">
     <MusicTable songs={songs}/>
    </div>
  );
}

export default App;

