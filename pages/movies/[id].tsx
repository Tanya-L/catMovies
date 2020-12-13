import Layout from "../../components/Layout";
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Date from "../../components/Date";
import {useState} from "react";
import {MovieInfo} from "./movieInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllPostIds, getPostData} from "../../lib/posts";
import MovieInfoComponent from "../../components/movieInfo";

export default function Post({postData}: {
    postData: {
        id: string
        title: string
        date: string
        contentHtml: string
    }
}) {

    const [movieInfo, setMovieInfo] = useState<MovieInfo>()

    fetch("http://www.omdbapi.com/?apikey=403ca16f&t=" + postData.id)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((response: MovieInfo) => {
            setMovieInfo(response)
        });

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <MovieInfoComponent movieInfo={movieInfo} />

                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )
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