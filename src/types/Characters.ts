export interface OriginModel {
    name: string;
    url: string;
}

export interface LocationModel  {
    name: string;
    url: string;
}
export interface CharacterModel {
    created: string;
    episode: string[],
    gender: string;
    id: number;
    image: string;
    location: LocationModel;
    name: string;
    origin: OriginModel;
    species: string;
    type?: string;
    url: string;
}
