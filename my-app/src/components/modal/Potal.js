import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const el = document.getElementById('modal');

  return ReactDOM.createPortal(children, el);
};

export default Portal;
