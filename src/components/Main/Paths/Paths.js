function Paths({ path }) {
  return (
    <ul className="paths partition__paths">
      {path.map((e, i) => (
        <li className="path" key={i}>
          {e}
        </li>
      ))}
    </ul>
  );
}

export default Paths;
