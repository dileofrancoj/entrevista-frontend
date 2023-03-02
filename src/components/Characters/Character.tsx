import { Col, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { CharacterModel } from '../../types/Characters';
interface Props {
    character: CharacterModel;
    onSelectCharacter: (character: CharacterModel) => void
}

const CardName = styled(Card.Title)`
    width:170px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:14px;
`

export const Character = ({ character, onSelectCharacter }: Props): JSX.Element => {
    console.log("character: ", character);

    return (
        <Col xs={12} md={2} className="mb-1 mt-1">

            <Card className="text-center" style={{ width: '13rem' }}>
                <Card.Img variant="top" src={character.image} style={{ width: '200px', margin: '0 auto' }} loading="lazy" />
                <Card.Body>
                    <CardName>{character.name}</CardName>
                    <p>Especie: {character.species}</p>
                    <Button onClick={() => onSelectCharacter(character)}>Más información</Button>
                </Card.Body>
            </Card>

        </Col >
    )
}