import {useHistory} from 'react-router-dom';

const AboutPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>This is page About</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default AboutPage;