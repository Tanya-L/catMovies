import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import TopBar from "./TopBar";

const name = 'Cat Dev Movie Lover'
export const siteTitle = 'CatMovies'

export default function Layout({children, home}: {
    children: React.ReactNode
    home?: boolean
}) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon2.ico"/>
                <meta
                    name="description"
                    content="CatMovies"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            <TopBar/>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
};
