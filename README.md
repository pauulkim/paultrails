# **PaulTrails**
[Live Site Link](https://paultrails.herokuapp.com/#/)

## About
PaulTrails is a clone of [AllTrails](https://www.alltrails.com/), where users are able to view information about parks as well as the hiking trails within them. Users can visit individual trail pages to see various details about the given trail, including a difficulty, summary, length, and a map of the route. Users are also able to create, view, edit, and delete reviews on any trail. 

The PaulTrails backend is built using a PostgreSQL database, AWS S3 storage, and a Ruby on Rails framework. AJAX requests are made through jQuery to receive data from the backend. The frontend is built using React, Redux, and CSS. The site also utilizes the Google Maps API to map the location of a park or trail.

## Features
### Search Bar
On PaulTrails, users can search for a park or a trail using a search bar. To implement the search feature, a React Hook was used. `useState` initially created a state and a way to change that state: 
```
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);
```
The `<input>` HTML element contains an event listener that updates the value of `searchTerm` using `setSearchTerm`:
```
<input 
  type="text"
  value={searchTerm}
  onChange={changeSearchTerm}
/>
```
A `useEffect` is used to filter and display the different search results (in alphabetical order) that match the current `searchTerm`. The `useEffect` is run every time the `searchTerm` changes, which triggers another render of the Hook.
```
useEffect( () => {
  const results = search.filter( item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setSearchResults(results.sort( (a, b) => (a.name > b.name) ? 1 : -1));
}, [searchTerm])
```


On PaulTrails, users can see all the reviews for any trail, but can only create or edit their own reviews. 
