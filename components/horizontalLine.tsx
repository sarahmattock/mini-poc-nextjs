import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './horizontalLine.module.scss'

export default function HorizontalLine() {
    return (
        <div >
            <Row>
                <Col> </Col>
                <Col xs={10} className={styles.wavyLine} > <img src="wavy-line.svg" /> </Col>
                <Col> </Col>
            </Row>
           
        </div>
    )
}