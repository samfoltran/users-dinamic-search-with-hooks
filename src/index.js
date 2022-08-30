import ReactDOM from 'react-dom/client';

import UserList from './UserList.js';
import SearchForm from './SearchForm.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <SearchForm />
    <UserList />
  </div>
);