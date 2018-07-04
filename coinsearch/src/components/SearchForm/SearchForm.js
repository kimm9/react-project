import React from "react";
import "./SearchForm.css"

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Breed Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Type in a dog breed to begin"
        id="breed"
      />
      <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>

    <div className="form-group">
      <label htmlFor="coin">Search Coin:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="coin"
        list="coins"
        type="text"
        className="form-control"
        placeholder="Type in a coin to begin"
        id="coin"
      />
      <datalist id="coins">
        {props.coins.map(coin => <option value={coin} key={coin} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleCoinSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div> 
  </form>
)

export default SearchForm;