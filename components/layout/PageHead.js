import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Peersoc"}
                </title>
            </Head>
        </>
    )
}

export default PageHead