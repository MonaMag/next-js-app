import MainLayout from "@/src/components/MainLayout";
import {useAtom} from "jotai";
import {testAtom} from "@/src/atom";

export default function Count() {
    const [value, setValue]= useAtom(testAtom);
    return (
        <MainLayout>
            <h1 className={'uppercase'}>Count: {value}</h1>
            <button className={'border-2 p-2'} onClick={() => setValue(value + 1)}>Increment</button>
        </MainLayout>
    )
}

