import Layout from '@/components/Layout'

import GlobalStyle from 'styles/global-style'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
