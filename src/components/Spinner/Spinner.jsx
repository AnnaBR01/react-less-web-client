import './spinner.less';

export const Spinner = () => {
  return (
    <div className="spinner">
      {[...Array(12)].map((item, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};
