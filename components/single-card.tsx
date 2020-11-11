
import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './single-card.module.scss'

export default function SingleCard({
    children,
    image
}: {
    children: React.ReactNode
    image: string
}) {
    return (
        <div className={styles.card}>
            <Row>
                <Col xs={3}><img className={styles.cardImage} src={image} /></Col>
                <Col xs={9} className={styles.cardDescription}>{children}</Col>
            </Row>
        </div>
    )
}