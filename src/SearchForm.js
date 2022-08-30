function SearchForm(props){

    function handleChange(){
        const searchString = document.getElementById('searchForm').value;
        props.setFilter(searchString);
    }

    return(
        <input
            id='searchForm'
            type='search'
            placeholder='Search User...'
            onChange={() => handleChange()}
        />
    );

} export default SearchForm;