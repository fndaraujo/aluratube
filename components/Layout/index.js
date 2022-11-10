import Head from 'next/head'

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
            <main>{children}</main>
        </>
    )
}

export default Layout
