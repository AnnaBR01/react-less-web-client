import './loader.less';

export const Loader = ({ percentComplete }) => {
  let widthLoader = `${percentComplete}%`;
  return (
    <div className="loader">
      <div className="loader__wrapper">
        <div
          className="loader__inner"
          style={{
            width: widthLoader,
          }}
        ></div>
      </div>
      <p className="loader__count">Loading {percentComplete}%</p>
    </div>
  );
};
