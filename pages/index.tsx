import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSiteContentPage } from '../lib/api'
import { getDataSafely } from '../lib/utils'
import { IPage } from '../models/IPage'
import React from 'react'
import Button from 'react-bootstrap/Button';
import HorizontalLine from '../components/horizontalLine'
import Card from '../components/card'
import CardSet from '../components/card-set'
import SingleCard from '../components/single-card'
import Cta from '../components/cta'
import TextBlock from '../components/text-block'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const pageData = useSelector((state) => state.pageData)
  const dispatch = useDispatch()

  const handleEmailChange = (e) =>
    dispatch({
      type: 'SIGNUP',
      email: e.target.value
    })
    const { email } = useForm()

  return (
    <Layout home>
      <Head>…</Head>
      <div className={`${utilStyles.headerParagraph} markdown`}>
        <section className="container">
          <h1 className={utilStyles.heading2Xl}>{pageData.headings.length > 0 ? pageData.headings.find(a => a.contentSlug === "campaign-ee-launch-landing-h1").value : ""}</h1>
          <div dangerouslySetInnerHTML={{ __html: pageData.textBlocks.length > 0 ? pageData.textBlocks.find(a => a.contentSlug === "campaign-ee-launch-landing-intro").htmlParsedValue : "" }}>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="primary"> {pageData.callsToAction.length > 0 ? pageData.callsToAction.find(a => a.contentSlug === "campaign-ee-launch-sign-up").value : ""}</Button>
          </div>
        </section>
      </div>
      <section className={utilStyles.videoSection}>
        <div className={`${utilStyles.heroVideo} ${utilStyles.center}`}>
          <video width="100%" controls poster={pageData.videos[0].video.previewImage.url}>
            <source src={pageData.videos[0].video.cloudinaryVideo.url} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <div className="container">
        <section className={`${utilStyles.textSection} markdown`}>
          <TextBlock heading={getDataSafely(pageData.headings, "campaign-ee-launch-landing-section1-h2", "value")}
            copy={getDataSafely(pageData.textBlocks, "campaign-ee-launch-landing-section1-copy", "htmlParsedValue")}></TextBlock>
        </section>
        </div>
        <HorizontalLine></HorizontalLine>
        <div className="container">

        <section className={`${utilStyles.textSection} markdown`}>

          <h2>{getDataSafely(pageData.headings, "campaign-ee-launch-landing-section2-h2", "value")}</h2>
          <SingleCard image={pageData.cards.length > 0 ? pageData.cards.find(a => a.contentSlug === "campaign-landing-ee-launch-testimonial-single").image.url : ""}>
            {pageData.cards.length > 0 ? pageData.cards.find(a => a.contentSlug === "campaign-landing-ee-launch-testimonial-single").copy : ""}
          </SingleCard>
        </section>
        <section className={`${utilStyles.textSection} markdown`}>
          {pageData.cardSets.length > 0 && pageData.cardSets.find(a => a.contentSlug === "campaign-landing-ee-launch-testimonial-group") ?
            <CardSet cardSet={pageData.cardSets.find(a => a.contentSlug === "campaign-landing-ee-launch-testimonial-group")}></CardSet> : null
          }
        </section>
        </div>
        <HorizontalLine></HorizontalLine>
        <div className="container">
        <section className={`${utilStyles.textSection} markdown`}>
          <TextBlock heading={getDataSafely(pageData.headings, "campaign-ee-launch-landing-section3-h2", "value")}
            copy={getDataSafely(pageData.textBlocks, "campaign-ee-launch-landing-section3-copy", "htmlParsedValue")}></TextBlock>
        </section>
        <section className={`${utilStyles.textSection}`} >
          <Row>
            <Col xs={1}>
            </Col>
            <Col xs={2}>
              Email Address
          </Col>
            <Col xs={9}>
              <input onChange={handleEmailChange} value={email}></input>
            </Col>
          </Row>
        </section>
        </div>
        <section>
          {pageData.callsToAction.length > 0 && pageData.callsToAction.find(a => a.contentSlug === "campaign-ee-launch-sign-up") ?
            <Cta url={"sign-up"} text={pageData.callsToAction.find(a => a.contentSlug === "campaign-ee-launch-sign-up").value}></Cta> : null}
        </section>
    </Layout>
  )
}

const useForm = () => {
  const state = useSelector((state) => state)
  return { ...state };
}

export async function getStaticProps() {
  const pageData: IPage = await getSiteContentPage()
  return {
    props: {
      initialReduxState: {
        pageData: pageData
      },
    },
  }
}