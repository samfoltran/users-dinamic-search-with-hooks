function SearchForm(props){

    function handleChange(){
        const searchString = document.getElementById('searchForm').value;
        console.log(searchString);
    }

    return(
        <input
            id='searchForm'
            type='search'
            onChange={() => handleChange()}
        />
    );

} export default SearchForm;