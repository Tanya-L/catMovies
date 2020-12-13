import React from 'react';
import {render} from '@testing-library/react';
import MovieInfoComponent from "../components/movieInfoComponent";
import {MovieInfo} from '../interfaces/movieInfo'
import {test} from "gray-matter";


test('renders title correct', () => {
    const {getByText} = render(<MovieInfoComponent movieInfo={MovieInfo.Title}>
        {movieInfo.Title}</MovieInfoComponent>);
    getByText('');
});

// test('does not render wrong title', () => {
//     const {queryByText} = render(<Title>A title</Title>);
//     const title = queryByText('Another title');
//     expect(title).toBeNull();
// });