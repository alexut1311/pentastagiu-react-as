import React from 'react';
import './notFound.css';

class NotFound extends React.PureComponent {
    goBack = () => {
        this.props.history.push('/')
    }

    randomGif = () => {
        var gifs=[
            "https://media.giphy.com/media/xuDHhHcCR0rew/giphy.gif",
            "https://media.giphy.com/media/13PZ0dKw1J3LzO/giphy.gif",
            "https://media.giphy.com/media/l0HlMG1EX2H38cZeE/giphy.gif",
            "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif",
            "https://media.giphy.com/media/5eFkEzMrg6QUea177s/giphy.gif",
            "https://media.giphy.com/media/5QSImn0L5Nh7lKTPAz/giphy.gif",
            "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif",
            "https://media.giphy.com/media/z9AUvhAEiXOqA/giphy.gif",
            "https://media.giphy.com/media/PALZssDrDOkXC/giphy.gif",
            "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif",
            "https://media.giphy.com/media/KOEc8ca7DELmw/giphy.gif",
            "https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif",
            "https://media.giphy.com/media/QZkpIdieotn3i/giphy.gif",
            "https://media.giphy.com/media/l378m8mNCUdjA3Euk/giphy.gif",
        ]
        return gifs[Math.floor(Math.random() * 13)];
    }

    render() {
    return(
        
        <div className="content-not-found">
              <br/> <br/> <br/> <br/><br/> 
              
              <img className="photo" src={this.randomGif()} alt="gif"></img>
              <h1 className="centered">This page isn't available</h1>
              <h2 className="centered">The link you followed may be broken, or the page may have been removed.</h2>
              <div className="centered-pointer" onClick={this.goBack}> &larr; Take me back</div>
          </div>
    )

    }
}


export default NotFound