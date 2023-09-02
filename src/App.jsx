import './App.less';
import tournaments from './tournaments.json';

import { Loader } from './components/Loader/Loader';
import { PlayerInfo } from './components/PlayerInfo/PlayerInfo';
import { Spinner } from './components/Spinner/Spinner';
import { TournamentItem } from './components/TournamentItem/TournamentItem';
import { useEffect, useState } from 'react';

function App() {
  const [percentComplete, setPercentComplete] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (percentComplete === 100) {
        setPercentComplete(0);
      } else {
        setPercentComplete((prevPercentComplete) => prevPercentComplete + 10);
      }
    }, 1000);

    return () => clearInterval(counter);
  }, [percentComplete]);

  return (
    <div className="app">
      <h1 className="app__title">Poker</h1>
      <Spinner />
      <div className="app__playerInfo">
        <PlayerInfo />
      </div>
      <Loader percentComplete={percentComplete} />
      <div className="app__tournaments">
        {tournaments.map((tournament) => {
          return <TournamentItem key={tournament.id} tournament={tournament} />;
        })}
      </div>
    </div>
  );
}

export default App;
