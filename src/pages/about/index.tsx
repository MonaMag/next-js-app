import {useRouter} from "next/router";
import MainLayout from "@/src/components/MainLayout";

export default function About() {
    const { push } = useRouter()
    const linkClickHandler = () => {
        push('/')
    }
    return (
        <MainLayout title={'About page'}>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Go back</button>
            <button onClick={()=> push('/posts')}>Go to posts</button>
        </MainLayout>
    )
}
