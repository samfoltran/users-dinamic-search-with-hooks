import React, {useState} from 'react';

import UserList from './UserList.js';
import SearchForm from './SearchForm.js';

function App(props){

    return(
        <div>
            <SearchForm />
            <UserList filter={'teste'} />
        </div>
    );

} export default App;