import * as React from 'react';
import { Row } from 'react-bootstrap';

import { CharacterModel } from '../../types/Characters';
import { Character } from './Character';
import { CharacterModal } from './CharacterModal'
interface Props {
    characters: Array<CharacterModel>
}

export const Characters = ({ characters }: Props): JSX.Element => {
    const [selectedCharacter, setSelectedCharacter] = React.useState<CharacterModel | undefined>(undefined)

    const onCloseCharacterModal = () => setSelectedCharacter(undefined)

    const onSelectCharacter = React.useCallback((character: CharacterModel) => {
        setSelectedCharacter(character)
    }, [characters])
    function buildCharacter() {
        return characters?.map((character: CharacterModel) => <Character onSelectCharacter={onSelectCharacter} character={character} key={character.id} />)
    }
    return (
        <>
            {selectedCharacter && <CharacterModal character={selectedCharacter} onCloseModal={onCloseCharacterModal} />}
            <Row className="mt-2 mb-2">
                {buildCharacter()}
            </Row>
        </>
    )
}