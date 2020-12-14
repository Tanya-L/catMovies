import MyPageLayout, {siteTitle} from "../components/MyPageLayout";
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import {GetStaticProps} from 'next'
import React from "react";
import ShowDate from "../components/ShowDate";
import TwitterBoxComponent from "../components/twitterBoxComponent";
import Head from "next/head";
import SearchComponent from "../components/searchComponent";
import {Col, Container, Row} from "react-bootstrap";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <MyPageLayout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Container>
                <Row>
                    <Col>
                        <section className={utilStyles.headingMd}>
                            <p>Hello, I'm cat and I love programming!</p>
                            <p> In fact, watch how my human mother programs and help her in every way.
                                Although she says that I am not helping at all.
                                And I also really love to watch films, I am a great expert in this area.
                                Here is a list of my favorites
                            </p>
                        </section>
                        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                            <h2 className={utilStyles.headingLg}>My Favorite Movies</h2>
                            <ul className={utilStyles.list}>
                                {allPostsData.map(({id, date, title}) => (
                                    <li className={utilStyles.listItem} key={id}>
                                        <Link href={`/movies/${id}`}>
                                            <a>{title}</a>
                                        </Link>
                                        <br/>
                                        <small className={utilStyles.lightText}>
                                            <ShowDate dateString={date}/>
                                        </small>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </Col>
                    <Col>
                        <SearchComponent/>
                        <TwitterBoxComponent/>
                    </Col>
                </Row>
            </Container>
        </MyPageLayout>
    )
}