// get search bar element
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const searchEvent = async (event) => {
    event.preventDefault();
    const search = searchInput.value;
    console.log(search);
    // get user search input converted to lowercase
    document.location.replace(`/product/${search}`);
};

// listen for user events
searchBtn.addEventListener('submit', searchEvent);
