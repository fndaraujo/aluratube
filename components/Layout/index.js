import Head from 'next/head'
import Header from '@/components/Header'
import Menu from '@/components/Menu'

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
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout
