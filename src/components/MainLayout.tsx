import Link from "next/link";
import Head from "next/head";

export default function MainLayout({children, title}: React.PropsWithChildren<{ className?: string, title?: string }>) {
    return(
        <>
            <Head>
                <title>{title} | Next App</title>
                <meta name='keywords' content={'key words, next, react'}/>
                <meta name='descriptions' content={'this is next.js app'}/>
                <meta charSet='utf-8'/>
            </Head>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/posts'}>Posts</Link>
            </nav>
            <main>{children}</main>
            <style>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: dimgray;
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            
            nav a {
            color: #fff;
            text-decoration: none;
            }
            
            main {
            margin-top: 60px;
            padding: 1rem;
            }
            `}</style>
        </>
    )
}
