
import React from "react";
import { Button } from "react-bootstrap";
import styles from './cta.module.scss'
import Link from 'next/link'

export default function Cta({
    text,
    url
}: {
    text: string,
    url: string
}) {

    return (
        <div className={`${styles.cta} d-flex justify-content-center`}>
            <Link href={url}>
                <Button variant="primary" >{text}</Button>
            </Link>

        </div>
    )
}
