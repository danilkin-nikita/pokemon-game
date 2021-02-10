import {useHistory} from 'react-router-dom';

const FinishPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>This is Finish</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default FinishPage;