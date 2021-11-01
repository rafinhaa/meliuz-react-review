import { IAnime } from "@/types";
import { Content, Description } from './styles';

interface AnimeCardProps {    
    anime: IAnime;
}

export default function Card({anime}: AnimeCardProps) {
    return (
            <Content key={anime.mal_id} >
                <img src={anime.image_url} alt={anime.title}/>
                <Description>
                    <p>{
                        anime.title.length > 15 ? anime.title.substring(0, 20) + "..." : anime.title
                    }</p>
                    <a href={anime.url}>Mais informações</a>
                </Description>
            </Content>
    );
}