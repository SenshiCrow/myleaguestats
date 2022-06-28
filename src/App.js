import React, {useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [playerData, SetPlayerData] = useState({});
  const API_KEY = ""; // API key here
  let username = "SenshiCrow"; // Your League username
  const API_CALL_STRING = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + username + "?api_key=" + API_KEY;

  axios.get(API_CALL_STRING).then(function(response){
    SetPlayerData(response.data);
  }).catch(function(error){
    console.log(error);
  });

  return (
      <div className="App">
          <h2 className="pagedesc">My League Stats</h2>
          <div className="container">
          {JSON.stringify(playerData) != "{}" ? 
            <>
            <img className="lolprofileicon" width="185" height="185" src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/" + playerData.profileIconId +".png"} alt="my league icon"></img>
              <p className="lolusername">{playerData.name}</p>
              <p className="loluserlevel">{playerData.summonerLevel}</p>
            </>
            :
            <>
              <p>No Player Data here</p>
            </>
          }
          </div>
      </div>
  );
}

export default App;
