const GamePage = ({onChangePage}) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  };
  return (
    <div>
      <p>This is Game Page!!!</p>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default GamePage;