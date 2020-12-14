import MyPageLayout from "../../components/MyPageLayout";
import Head from 'next/head'
import React, {useState} from "react";
import {MovieInfo} from "../../interfaces/movieInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllPostIds, getPostData} from "../../lib/posts";
import MovieInfoComponent from "../../components/movieInfoComponent";
import MovieRatingComponent from "../../components/movieRatingComponent";
import MovieTechInfoComponent from "../../components/movieTechInfoComponent";
import {TrailerInfo} from "../../interfaces/trailerInfo";
import TrailerComponent from "../../components/trailerInfoComponent";
import {Col, Container, Row} from "react-bootstrap";
import TwitterBoxComponent from "../../components/twitterBoxComponent";

export default function Post({postData}: {
    postData: {
        id: string
        title: string
        date: string
        contentHtml: string
    }
}) {

    const [movieInfo, setMovieInfo] = useState<MovieInfo>(undefined)
    const [trailerInfo, setTrailerInfo] = useState<TrailerInfo>(undefined)

    if (!movieInfo) {
        fetch("https://www.omdbapi.com/?apikey=403ca16f&t=" + postData.title,
            {
                method: 'GET',
                cache: 'force-cache'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then((response: MovieInfo) => {
                setMovieInfo(response)
            });
    }

    if (!trailerInfo && movieInfo) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const imdbUrl = "https://imdb-api.com/en/API/YouTubeTrailer/k_zxnuzv55/" + movieInfo.imdbID
        fetch(proxyUrl + imdbUrl,
            {
                method: 'GET',
                cache: 'force-cache'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            // .then((response: TrailerInfo) => {
            //     setTrailerInfo(response)
            // });
    }

    return (
        <MyPageLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <Container>
                    <Row>
                        <Col>
                            <MovieInfoComponent movieInfo={movieInfo}/>
                            <MovieRatingComponent movieInfo={movieInfo}/>
                            <MovieTechInfoComponent movieInfo={movieInfo}/>
                        </Col>
                        <Col>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <TrailerComponent trailerInfo={trailerInfo}/>
                            <TwitterBoxComponent/>
                        </Col>
                    </Row>
                </Container>
            </article>
        </MyPageLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}