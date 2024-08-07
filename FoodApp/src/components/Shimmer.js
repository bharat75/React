const Shimmer = () => {
  return (
    <div className="listing">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmerCard"></div>
        ))}
    </div>
  );
};

export default Shimmer;
