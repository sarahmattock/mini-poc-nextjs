
import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './card.module.scss'

export default function Card({
    children,
    image
}: {
    children: React.ReactNode
    image: string
}) {
    return (
        <Col xs={4}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={image} />
                <div className={styles.cardDescription}>
                    {children}
                </div>
            </div>
        </Col>
    )
}