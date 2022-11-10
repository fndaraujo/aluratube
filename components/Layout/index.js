import Head from 'next/head'
import Menu from '../Menu'

function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="An application similar to youtube proposed in the alura fifth react immersion."
                />
                <meta
                    name="keywords"
                    content="aluratube, alura, react immersion, next, react"
                />
                <title>aluratube</title>
            </Head>
            <Menu />
            <main>{children}</main>
        </>
    )
}

export default Layout
