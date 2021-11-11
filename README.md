# **PaulTrails**
[Live Site Link](https://paultrails.herokuapp.com/#/)

## About
PaulTrails is a clone of [AllTrails](https://www.alltrails.com/), where users are able to view information about parks as well as the hiking trails within them. Users can visit individual trail pages to see various details about the given trail, including a difficulty, summary, length, and a map of the route. Users are also able to create, view, edit, and delete reviews on any trail. 

The PaulTrails backend is built using a PostgreSQL database, AWS S3 storage, and a Ruby on Rails framework. AJAX requests are made through jQuery to receive data from the backend. The frontend is built using React, Redux, and CSS. The site also utilizes the Google Maps API to map the location of a park or trail.

## Features
### Search Bar
On PaulTrails, users can search for a park or a trail using a search bar. To implement the search feature, a React Hook was used. Initially, `useState` created a state and a way to change that state: 
```
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);
```
The `<input>` HTML field where users type contains an event listener called `changeSearchTerm` that updates the value of `searchTerm` by invoking `setSearchTerm` with the value of the event (in this case what the user typed).
```
<input 
  type="text"
  value={searchTerm}
  onChange={changeSearchTerm}
/>
```
```
const changeSearchTerm = e => {
  setSearchTerm(e.target.value);
};
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

### Review Form
On PaulTrails, users can create or edit their own reviews. Rather than creating separate components for making a review and updating a review, one review form component handled both cases. The review form component utilized a state that was passed down from a different component:
```
constructor(props) {
  super(props);
  this.state = this.props.formState;
};
```
The `formState` passed down for creating a review was essentially an empty state:
```
let formState = {
  rating: 0,
  activity_date: "",
  review_description: "",
  user_id: currentUser,
  trail_id: trailId,
};
```
The `formState` passed down for updating a review was the previous state of the review: 
```
let formState = {
  rating: review.rating,
  activity_date: review.activity_date,
  review_description: review.review_description,
  user_id: review.user_id,
  trail_id: review.trail_id,
};
```
These fields were then used to populate the values within the HTML elements in the review form:
```
<ReactStars value={this.state.rating}/> 
<label>Activity Date  
  <input value={this.state.activity_date}/>
</label>
<textarea value={this.state.review_description}/>
```