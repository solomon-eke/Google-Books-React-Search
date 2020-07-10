import React from "react";
import { Container, Row, Col } from "../components/Grid";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
    title,
    authors,
    description,
    image,
    link,
    Button
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <img src={image || "https://placehold.it/100x100"} alt={title} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title} by {authors}</h3>
                        <p>{description}</p>

                    </Col>
                </Row>
                <Row className="btnRow">
                    <Button />
                    <a rel="noreferrer noopener" target="blank" href={link}>
                        <button className=" btn viewBtn">
                            View Book
                            </button>
                    </a>
                </Row>
            </Container>
        </li>
    );
}
