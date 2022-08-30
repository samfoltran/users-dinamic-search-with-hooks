import React, {useState} from 'react';

import UserList from './UserList.js';
import SearchForm from './SearchForm.js';

function App(props){

    const [filter, setFilter] = useState('');

    return(
        <div id='app'>
            <SearchForm setFilter={setFilter} />
            <UserList filter={filter} />
        </div>
    );

} export default App;