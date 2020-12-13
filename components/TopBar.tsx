import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = 'Cat Dev Movie Lover'
export const siteTitle = 'CatMovies'

export default function TopBar({home}: {
    home?: boolean
}) {
    return (
        <div className={styles.header}>
            {home ? (
                <>
                    <img
                        src="/images/profile.jpg"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <img
                                src="/images/profile.jpg"
                                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                alt={name}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </div>
    )
}
