import {useHistory} from 'react-router-dom';

const ContactPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>This is page Contact</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default ContactPage;