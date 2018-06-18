import React from "react";

const name = "Matthew"
const idea = "This is an idea"

const logLetters = str => {
  for (let i=0; i<str.length; i++) {
    console.log(str[i])
  }
}

logLetters(idea)

const stripVowels = str => {
  const vowels = ["a", "e", "i", "o", "u"]
  let result = "";

  for (let i=0; i < str.length; i++) {
    if(!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result
}

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is ({name})</h1>
        <h2>My name has ({name.length}) letters</h2>
        <h2>I think React ({idea})</h2>
        <h2>This is my name with out vowels ({stripVowels(name)})</h2>
      </div>
    </div>
  </div>
)

export default JSXVariables;