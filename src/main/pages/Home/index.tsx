import { useState } from "react";
import { useForm } from "react-hook-form";
import { animes } from '@/services';
import { ISearch, IAnimeResults} from '@/types';

const Home: React.FC = () => {

    const [anime, setAnime] = useState<IAnimeResults>({} as IAnimeResults); // {} as IAnimeResults pq recebe muitas coisas
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const { register, watch, formState: { errors }, handleSubmit, getValues } = useForm<ISearch>();

    const onSubmit = (data: ISearch) => {
        setIsLoad(true)
        const { find } = data;
        animes.get(`search/anime?q=${find}`).then( 
            response => {
                setAnime(response.data)
            }
        ).catch( 
            e => console.log(e)
        ).finally( 
            () => {
                setIsLoad(false)
            }
        )
    };

    return (
        <div>
            <h1>Escolha seu anime</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text"
                    placeholder="Nome do anime" 
                    { ...register('find',{required: true}) } 
                />
                <input type="submit" value="Buscar"/>
            </form>  
            <span>{errors.find && 'Informe o anime!' }</span> {/* Exibe os erros do useForm */}
            { 
                isLoad ? (
                <div>
                <h1>Estamos pesquisando... aguarde instantes.</h1>
                </div>
            ) : (
                <>
                    { 
                        anime?.results?.length <= 0 ? (
                        <h3>Por enquando, você ainda não pesquisou nada...</h3>
                        ) : (
                        <>
                            { 
                                anime?.results?.map( 
                                    item => (
                                    <div key={item.mal_id}>
                                        <span>{item.title}</span>
                                        <img src={item.image_url} alt={item.title} />
                                        <p>{item.synopsis}</p>
                                        <p><b>Nota: </b> {item.score}</p>
                                    </div>
                                    ) 
                                )
                            }
                        </>
                        )
                    }
                </>
            )}
        </div>
    );
}

export default Home;