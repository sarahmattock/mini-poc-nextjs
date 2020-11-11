
import React from "react";
import { Button } from "react-bootstrap";
import styles from './cta.module.scss'
import { useDispatch } from 'react-redux'

export default function Cta({
    text,
    url
}: {
    text: string,
    url: string
}) {

    return (
        <div className={`${styles.cta} d-flex justify-content-center`}>
            <Button variant="primary" href={url}>{text}</Button>
        </div>
    )
}
