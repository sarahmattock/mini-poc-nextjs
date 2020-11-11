import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './horizontalLine.module.scss'

export default function HorizontalLine() {
    return (
        <div className={styles.wavyLine}>
            <img src="wavy-line.svg" />
        </div>
    )
}