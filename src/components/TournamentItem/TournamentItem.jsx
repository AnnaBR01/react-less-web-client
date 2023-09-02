import './tournamentItem.less';
import { PinIcon } from '../../assets/icons/PinIcon';
import { TagIcon } from '../../assets/icons/TagIcon';
import { TimeIcon } from '../../assets/icons/TimeIcon';
import { PlayerIcon } from '../../assets/icons/PlayerIcon';
import { TourneyIcon } from '../../assets/icons/TourneyIcon';
import { useState } from 'react';

export const TournamentItem = ({ tournament }) => {
  const [isSelected, toggleIsSelected] = useState(false);

  const joinTable = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={
        isSelected
          ? 'tournamentItem tournamentItem--selected'
          : 'tournamentItem'
      }
      onClick={() => toggleIsSelected(!isSelected)}
    >
      <div
        className={`tournamentItem__status tournamentItem__status--${tournament.status.toLowerCase()}`}
      >
        {tournament.status}
      </div>

      <div className="tournamentItem__wrapper">
        <div className="tournamentItem__content">
          <div className="tournamentItem__info">
            <div className="tournamentItem__tagsWrapper">
              {tournament.pin && <PinIcon />}
              <div className="tournamentItem__textTag">{tournament.type}</div>
              {tournament.tags.length > 0 &&
                tournament.tags.map((tag, index) => {
                  return <TagIcon key={index} type={tag} />;
                })}
            </div>
            <p className="tournamentItem__title">{tournament.title}</p>
          </div>
          <button
            className="tournamentItem__event"
            disabled={tournament.status === 'Canceled'}
            onClick={joinTable}
          >
            {tournament.status === 'Registering' ? 'Join table' : 'Canceled'}
          </button>
        </div>
        <div className="tournamentItem__description">
          <div className="tournamentItem__descriptionItem">
            <TimeIcon />
            <span>{tournament.date}</span>
          </div>

          <div className="tournamentItem__descriptionItem">
            <PlayerIcon />
            <span>{tournament.playersNumber}</span>
          </div>

          <div className="tournamentItem__descriptionItem">
            <TourneyIcon />
            <span>{tournament.tourney}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
