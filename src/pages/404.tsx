import Link from "next/link";
import MainLayout from "@/src/components/MainLayout";
import cls from "../styles/error.module.scss"

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={cls.error}>Error 404</h1>
            <p>Please <Link href={'/'}>go back</Link> to safety</p>
        </MainLayout>
    )
}
