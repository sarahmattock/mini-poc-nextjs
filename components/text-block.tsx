
import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './card.module.scss'

export default function TextBlock({
    heading,
    copy,
}: {
    heading: string,
    copy: string
}) {
    return (
        <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
                <div className={styles.textSection}>
                    <h2>{heading}</h2>
                    <div dangerouslySetInnerHTML={{ __html: copy }}>
                    </div>
                </div>
            </Col>
            <Col xs={1}></Col>
        </Row>
    )
}