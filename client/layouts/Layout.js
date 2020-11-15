import Head from 'next/head'
import Navbar from './comps/navbar'
import SideBar from './comps/sidebar'
import ControlPanel from './comps/controlPanel'

export const siteTitle = 'Mini Shop'
function Layout({ children, pageInfo }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="MiniShop"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={pageInfo.header|siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar></Navbar>
            <div class="container-fluid">
                <div class="row">
                    <SideBar></SideBar>
                    <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">

                        <ControlPanel headerText={pageInfo.header}></ControlPanel>

                        {children}
                    </main>
                </div>
            </div>
        </>)
}

export default Layout;