const MovieList = (props) => {
  // console.log(props.data[0].title);
  return (
    <>
      <table className="">
        <thead>
          <tr>
            <th>Title </th>
            <th>Genere</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Pathan</td>
            <td>Drama</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Pathan</td>
            <td>Drama</td>
            <td>2023</td>
          </tr> */}
          {/* console.log(item.data[1].title); */}
          {props.data.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.year}</td>
              {/* <td>{item.data[i].genre}</td>
              <td>{item.data[i].year}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default MovieList;
