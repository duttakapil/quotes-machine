import React from 'react';
import {hot} from 'react-hot-loader';
import './style.css';

let quotes = [{
    text: "Let's go to Chandrapur",
    author: "Vinith"
}, {
    text: "I want to play FIFA right now",
    author: "Jojo"
}, {
    text: "I just got a new job!",
    author: "Vishal"
}, {
    text: "Death by Chocolate is the best icecream in the world!",
    author: "Onni"
}, {
    text: "Let's play Cricket",
    author: "Titu"
}];
  
export default class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        quote: quotes[0].text,
        author: quotes[0].author,
        index: 0,
        bgc: "8F6FAF"
        };
        this.handleClick = this.handleClick.bind(this);       
    }

    randomNum(num) {
        const index = Math.floor(Math.random() * num);
        
        if(index === this.state.index) { 
            return this.randomNum(num);
        }

        return index;
    }
        
    handleClick() {
        const index = this.randomNum(quotes.length);
        
        const color = this.backgroundColor();
        
        this.setState({
        quote: quotes[index].text,
        author: quotes[index].author,
        index: index,
        bgc: color
        });
    }

    backgroundColor() {
        const num = this.randomNum(10000000);
        if(num < 1000000) this.backgroundColor();
        return num.toString(16);
    }

    render() {
        document.body.style.backgroundColor = '#' + this.state.bgc;
        return (
        <div id="quote-box" style={{color: "#" + this.state.bgc}}>
            <h3 id="text">{this.state.quote}</h3>
            <p id="author">-{this.state.author}</p>
            <button id="new-quote" onClick={this.handleClick}>Next Quote</button>
            <a target="_top" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${this.state.quote} - ${this.state.author}`}>Tweet</a>
        </div>
        );
    }
};