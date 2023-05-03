import MainLayout from "@/src/components/MainLayout";
import Count from "@/src/components/count";
import {useAtom} from "jotai";
import {testAtom} from "@/src/atom";

export default function Posts() {
    const [number] = useAtom(testAtom)
    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts Page {number}</h1>
            <Count/>
        </MainLayout>

    )
}
