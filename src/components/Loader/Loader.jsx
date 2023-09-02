import './loader.less';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [percentComplete, setPercentComplete] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (percentComplete === 100) {
        setPercentComplete(0);
      } else {
        setPercentComplete((prevPercentComplete) => prevPercentComplete + 5);
      }
    }, 2000);
    return () => clearInterval(counter);
  }, [percentComplete]);

  return (
    <div className="loader">
      <div className="loader__wrapper">
        <div
          className="loader__inner"
          style={{
            width: `${percentComplete}%`,
          }}
        ></div>
      </div>
      <p className="loader__count">Loading {percentComplete}%</p>
    </div>
  );
};
