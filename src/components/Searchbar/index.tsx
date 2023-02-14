import React from 'react';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';

type SearchbarProps = {
    searchValue: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = (props: SearchbarProps) => {
    return (
        <Row className="justify-content-center mt-3 mb-3">
            <Col lg={6} md={12} sm={12}>
                <InputGroup>
                    <Form.Control
                        value={props.searchValue}
                        onChange={props.onSearchChange}
                        placeholder="Personajes"
                        aria-label="personajes"
                    />
                </InputGroup>
            </Col>
        </Row>
    )
}

export default React.memo(Searchbar);