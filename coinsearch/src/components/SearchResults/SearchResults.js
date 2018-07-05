import React from "react";
import "./SearchResults.css";



const SearchResults = props => (



<div>{props.coinresults.map(result => (
  <div className="card" >
    <img className="card-img-top" src={"https://www.cryptocompare.com" + result["ImageUrl"]} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{result["FullName"]}</h5>
      <a href={"https://www.cryptocompare.com" + result["Url"]}  className="btn btn-primary">See Full Details</a>
    </div>
  </div>
  ))}
  
</div>

);

export default SearchResults;