import React from 'react';
import {render} from '@testing-library/react';
import MovieInfoComponent from "../components/movieInfoComponent";
import MovieTechInfoComponent from "../components/movieTechInfoComponent";
import MovieRatingComponent from "../components/movieRatingComponent";


function createTestMovieInfo() {
    return {
        "Title": "Tenet",
        "Year": "2020",
        "Rated": "PG-13",
        "Released": "03 Sep 2020",
        "Runtime": "150 min",
        "Genre": "Action, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Juhan Ulfsak, Jefferson Hall, Ivo Uukkivi, Andrew Howard",
        "Plot": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "Language": "English, Russian, Ukrainian, Estonian",
        "Country": "UK, USA",
        "Awards": "3 wins & 6 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "71%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "7.6",
        "imdbVotes": "189,073",
        "imdbID": "tt6723592",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "Syncopy, Warner Bros. Pictures",
        "Website": "N/A",
        "Response": "True"
    };
}

test('renders title correct', () => {
    const mi = createTestMovieInfo()
    const {getByText} = render(
        <MovieInfoComponent movieInfo={mi} />
    );
    getByText('Tenet (2020)');
});

test('renders awards correct', () => {
    const mi = createTestMovieInfo()
    const {getByText} = render(
        <MovieInfoComponent movieInfo={mi} />
    );
    getByText('03 Sep 2020 | 150 min | Action, Sci-Fi | 3 wins & 6 nominations.');
});

test('renders country correct', () => {
    const mi = createTestMovieInfo()
    const {getByText} = render(
        <MovieInfoComponent movieInfo={mi} />
    );
    getByText('Country: UK, USA');
});


test('renders source rating correct', () => {
    const mi = createTestMovieInfo()
    const {getByText} = render(
        <MovieRatingComponent movieInfo={mi} />
    );
    getByText('Rotten Tomatoes: 71%');
});

test('renders type correct', () => {
    const mi = createTestMovieInfo()
    const {getByText} = render(
        <MovieTechInfoComponent movieInfo={mi} />
    );
    getByText('Type: movie | DVD: N/A | Website: N/A');
});