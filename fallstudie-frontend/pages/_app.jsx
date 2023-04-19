import Link from "next/link"
import "./_app.css"
import Nav from "@components/Nav"
import useSession from "@lib/session"

const links = [
    {href: "/", title: "Home"},
    {href: "/posts/create", title: "Create"},
]

export default function App({ Component, pageProps }) {
    const session = useSession()
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <div>
            <header>
                <Nav links={links} session={session} />
            </header>
            <main>
                <Component {...newPageProps} />
            </main>
        </div>
    )
}
