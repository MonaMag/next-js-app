import Link from "next/link";

export default function MainLayout({children}: React.PropsWithChildren<{ className?: string }>) {
    return(
        <>
            <nav>
                <Link>Home</Link>
            </nav>
            <main>{children}</main>
        </>
    )
}
