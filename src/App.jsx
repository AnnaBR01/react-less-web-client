import './App.less';
import tournaments from './tournaments.json';

import { Loader } from './components/Loader/Loader';
import { PlayerInfo } from './components/PlayerInfo/PlayerInfo';
import { Spinner } from './components/Spinner/Spinner';
import { TournamentItem } from './components/TournamentItem/TournamentItem';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Poker</h1>
      <Spinner />
      <div className="app__playerInfo">
        <PlayerInfo rating={5} />
      </div>
      <Loader />
      <div className="app__tournaments">
        {tournaments.map((tournament) => {
          return <TournamentItem key={tournament.id} tournament={tournament} />;
        })}
      </div>
    </div>
  );
}

export default App;
