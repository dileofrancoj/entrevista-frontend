import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { CharacterModel } from '../../types/Characters';

interface Props {
    onCloseModal: () => void;
    character: CharacterModel | null
}

export const CharacterModal = ({ onCloseModal, character }: Props): JSX.Element | null => {
    if (!character) return null;
    return (
        <Modal show={true} onHide={onCloseModal}>
            <Modal.Header closeButton>
                {character.name} | {character.gender}
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <img style={{ width: '7rem' }} src={character.image} alt={character.name} />
                        </Col>
                        <Col>
                            <h5>Especie: {character.species}</h5>
                            <h5>Origen: {character.origin.name}</h5>
                            <h5>Location: {character.location.name}</h5>
                            <h5>Tipo: {character.type ? character.type : " - "}</h5>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}