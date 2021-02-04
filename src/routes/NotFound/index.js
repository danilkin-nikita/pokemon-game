import {useHistory} from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className>
      <h1>404</h1>
      <p>Not Found</p>
      <button onClick={handleClick}>Back to home</button>
    </div>
  )
}

export default NotFound;