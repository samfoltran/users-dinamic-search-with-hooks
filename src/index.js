import ReactDOM from 'react-dom/client';

function Foo(){
  return(
    "I'm Ready"
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Foo />
);