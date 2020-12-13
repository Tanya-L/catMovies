import Layout from "../../components/Layout";
import Head from 'next/head'
import React, {useState} from "react";
import {MovieInfo} from "../../interfaces/movieInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllPostIds, getPostData} from "../../lib/posts";
import MovieInfoComponent from "../../components/movieInfoComponent";
import MovieRatingComponent from "../../components/movieRatingComponent";
import {TwitterBoxComponent} from "../../components/twitterBoxComponent";
import MovieTechInfoComponent from "../../components/movieTechInfoComponent";
import {TrailerInfo} from "../../interfaces/trailerInfo";
import TrailerComponent from "../../components/trailerInfoComponent";

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
        fetch("http://www.omdbapi.com/?apikey=403ca16f&t=" + postData.title)
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
        fetch("https://imdb-api.com/en/API/YouTubeTrailer/k_zxnuzv55/" + movieInfo.imdbID)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then((response: TrailerInfo) => {
                setTrailerInfo(response)
            });
    }

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <MovieInfoComponent movieInfo={movieInfo}/>
                <MovieRatingComponent movieInfo={movieInfo}/>
                <MovieTechInfoComponent movieInfo={movieInfo}/>
                <TrailerComponent trailerInfo={trailerInfo}/>

                <TwitterBoxComponent/>

            </article>
        </Layout>
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