
import React from "react";
import { Row, Col } from "react-bootstrap";
import { ICardSet } from "../models/ICardSet";
import styles from './card-set.module.scss'
import Card from './card'


export default function CardSet({
    cardSet
}: {
    cardSet: ICardSet
}) {
    return (
        <div>
            <Row>
                {cardSet.cards.map((card) =>
                    <Card key={card.contentSlug} image={card.image.url}>{card.copy}</Card>
                )}
            </Row>
        </div>
    )
}