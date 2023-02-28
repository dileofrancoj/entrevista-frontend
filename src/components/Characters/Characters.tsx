import * as React from 'react';
import { Row } from 'react-bootstrap';

import { CharacterModel } from '../../types/Characters';
import { Character } from './Character';

interface Props {
    characters: CharacterModel[]
}

export const Characters = ({ characters }: Props): JSX.Element => {
    console.log("characters: ", characters)
    // validar si realmente es un array
    function buildCharacter() {
        return characters?.map((character: CharacterModel) => <Character character={character} key={character.id} />)
    }
    return (
        <Row className="mt-2 mb-2">
            {buildCharacter()}
        </Row>
    )
}