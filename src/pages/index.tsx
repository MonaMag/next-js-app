import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
      <MainLayout title={'Home Page'}>
          <main className={'flex max-h-screen flex-col items-center justify-between p-24'}>
              <h1>Hello, Next.js!</h1>
              <p><Link href={'/about'}>About</Link></p>
              <p><Link href={'/posts'}>Posts</Link></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </main>
      </MainLayout>
  )
}
