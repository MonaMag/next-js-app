import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
      <MainLayout title={'Home Page'}>
          <main className={'flex max-h-screen flex-col'}>
              <h1 className={'text-orange-700 font-bold my-5'}>Hello, Next.js!</h1>
              <p><Link href={'/about'} className={'inline-block py-2 px-2 hover:text-orange-700'}>About</Link></p>
              <p><Link href={'/posts'} className={'inline-block py-2 px-2 hover:text-orange-700'}>Posts</Link></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </main>
      </MainLayout>
  )
}
