
import { Container } from './styles';
import { IAnime } from "@/types";
import Card from '@/components/Card';

interface ContainerCardsProps {
    animes: IAnime[];
}

export default function ContainerCards({ animes }: ContainerCardsProps) {
    return (
        <Container >
            {
                animes.map(anime => (
                    <Card key={anime.mal_id} anime={anime} />
                ))
            }
        </Container>
    );
}