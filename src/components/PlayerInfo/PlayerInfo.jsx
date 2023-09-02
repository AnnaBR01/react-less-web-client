import { useState } from 'react';
import './playerInfo.less';
import avatar from '../../assets/images/avatar.png';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { OpenIcon } from '../../assets/icons/OpenIcon';
import { PaintedStarIcon } from '../../assets/icons/PaintedStarIcon';
import { StarIcon } from '../../assets/icons/StarIcon';

export const PlayerInfo = () => {
  const [isClose, toggleIsClose] = useState(false);
  const rating = 5;

  return (
    <div className="playerInfo">
      <div className="playerInfo__details">
        <p className="playerInfo__name">LongUserName</p>
        <div className="playerInfo__rating rating">
          {[...Array(Math.round(rating))].map((item, index) => (
            <PaintedStarIcon key={index} />
          ))}

          {[...Array(5 - +Math.round(rating))].map((item, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>

      <img src={avatar} alt="Player avatar" className="playerInfo__avatar" />

      <div className="playerInfo__sum sum">
        <button className="sum__button" onClick={() => toggleIsClose(!isClose)}>
          {isClose ? <CloseIcon /> : <OpenIcon />} {!isClose && 'Show balance'}
        </button>
        {isClose && <span className="sum__number">$100,500.00</span>}
      </div>
    </div>
  );
};
