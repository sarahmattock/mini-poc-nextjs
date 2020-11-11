import Head from 'next/head'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './layout.module.scss'
export const siteTitle = 'INTO Future- Reach your potential'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div >
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Cove-Light.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Cove-Bold.otf"
                    as="font"
                    crossOrigin=""
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Mini POC for Into Future using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <img
                    src="logo_into.svg"
                    className={`${styles.headerHomeImage}`}
                />
            </header>
            <main >{children}</main>
            <footer className={styles.footer}>
                <div className="container">
                    <Row>
                        <Col xs={12}>
                            <img
                                src="logo_into.svg"
                                className={`${styles.footerHomeImage}`}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className={styles.copyrightText}>
                            <div>
                                © COPYRIGHT 2020 | INTO UNIVERSITY PARTNERSHIPS LTD AND IUP 2 LLP  |  沪ICP备14028023号-3  |  Privacy  |  Terms  |  Sitemap  |  Cookies Policy  |  Governance
                            </div>

                        </Col>
                    </Row>
                </div>
            </footer>
        </div>
    )
}