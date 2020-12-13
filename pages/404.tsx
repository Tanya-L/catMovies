import MyPageLayout from "../components/MyPageLayout";
import utilStyles from "../styles/utils.module.css";

const cat = '404Cat'

export default function ErrorPage() {
    return (
        <MyPageLayout>
            <h1 className={utilStyles.error404}>OOps!</h1>
            <img
                src="/images/404.jpeg"
                alt={cat}
            />
        </MyPageLayout>
    )
}