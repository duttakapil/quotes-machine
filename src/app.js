import React from 'react';
import {hot} from 'react-hot-loader';
import './style.css';

let quotes = [{
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
}, {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
}, {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
}, {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
}, {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
}, {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: "James Cameron"
}, {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, {
    text: "It is during our darkest moments that we must focus to see the light.",
    author : "Aristotle"
}];
  
class Quote extends React.Component{
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
            <div className="textarea">
                <h3 id="text">{this.state.quote}</h3>
                <p id="author">-{this.state.author}</p>
            </div>
            <button id="new-quote" onClick={this.handleClick}><span>Next Quote</span></button>
            <a target="_top" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${this.state.quote} - ${this.state.author}`}><img alt="Twitter Logo" src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg"/></a>            
        </div>
        );
    }
};

export default hot(module)(Quote)