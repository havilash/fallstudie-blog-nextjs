import Link from "next/link"
import "./_app.css"
import Nav from "@components/Nav"

const links = [
    {href: "/", title: "Home"},
    {href: "/posts/create", title: "Create"},
]

export default function App({ Component, pageProps }) {
    return (
        <div>
            <header>
                <Nav links={links} />
            </header>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    )
}
