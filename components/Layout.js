//rafc
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, page }) => {
    console.log('que es children', children)
    return (
        <div>
             <Head>
                <title>Pet Care - {page}</title>
                <meta name="description" content="website pet care store" />
                <meta name="keywords" content="ReactJS, NextJs, NodeJs"/>
                <meta name="author" content="Chicacode"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}

            {/* <Footer /> */}
        </div>
    )
}

export default Layout