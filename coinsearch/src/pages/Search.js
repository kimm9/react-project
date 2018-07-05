import React, { Component } from "react";
import API from "../utils/API"
import Container from "../components/Container"
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"
import Alert from "../components/Alert"


class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    coinresults: [],
    coins: [],
    error: ""
  };

  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));

    API.getCoinList()
      .then(res => {
        var coinNameArr=[];
        var coinList = res.data['Data']
        console.log(coinList)
        for (var key in coinList) {
          coinNameArr.push(coinList[key]["CoinName"])
        }
        this.setState({coins: coinNameArr.sort()})
      })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.message)
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleCoinSubmit = event => {
    event.preventDefault();
    API.getCoinList()
      .then(res => {
        var coinobj=[];
        var coinInfo = [];
        var coinList = res.data['Data']
        if (coinList === "error") {
          throw new Error(res.data.message);
        }
        for (var key in coinList) {
          if (this.state.search.toUpperCase() == coinList[key]["CoinName"].toUpperCase() )
          coinobj.push(coinList[key])
        }
        this.setState({ coinresults: coinobj})
        console.log(coinobj)
      })
  }

  render() {
    return (
        <Container style={{ minHeight: "80%"}}>
          <h1 className="text-center">Search</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleCoinSubmit={this.handleCoinSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
            coins={this.state.coins}
          />
          <SearchResults 
          results={this.state.results}
          coinresults={this.state.coinresults}
          />
        </Container>
      
    )
  }

}
export default Search;