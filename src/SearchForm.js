function SearchForm(props){

    function handleChange(){
        const searchString = document.getElementById('searchForm').value;
        
        props.setFilter(searchString);
    }

    return(
        <input
            id='searchForm'
            type='search'
            onChange={() => handleChange()}
        />
    );

} export default SearchForm;