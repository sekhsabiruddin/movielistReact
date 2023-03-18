const GenreFilter = (item) => {
  // console.log(item.genres[0]);
  function shoot(e) {
    console.log("Filtering by " + e.target.innerText);
  }
  return (
    <div className="outerdiv">
      <div>
        <h2>Top 15 Movie of All Time</h2>
      </div>
      <div className="filter-box">
        <div className="all-filter-options">
          <h3>Filter By Genere</h3>
          <div className="btn-box">
            {/* <button onClick={shoot}>{item.genres[0]}</button> */}
            {/* <button>{item.genres[1]}</button>
            <button>{item.genres[2]}</button>
            <button>{item.genres[3]}</button>
            <button>{item.genres[4]}</button>
            <button>{item.genres[5]}</button>
            <button>{item.genres[6]}</button>
            <button>{item.genres[7]}</button>
            */}
            {item.genres.map((item, i) => (
              <button onClick={shoot} key={i}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenreFilter;
