import { useState } from "react";
import { useForm } from "react-hook-form";
import { animes } from '@/services';
import { ISearch, IAnime} from '@/types';
import ContainerCards from '@/components/ContainerCards';
import SearchLoader from '@/components/SearchLoader';
import SearchForm from '@/components/SearchForm';

const Home: React.FC = () => {

    const [anime, setAnime] = useState<IAnime[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const { register, watch, formState: { errors }, handleSubmit, getValues } = useForm<ISearch>();

    const onSubmit = (data: ISearch) => {
        setIsLoad(true)
        const { find } = data;
        animes.get(`search/anime?q=${find}`).then( 
            response => {
                setAnime(response.data.results)
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
            <SearchForm>
                <h1>Escolha seu anime</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text"
                        placeholder="Nome do anime" 
                        { ...register('find',{required: true}) } 
                    />
                    <input type="submit" value="Buscar"/>
                </form>  
                <span>{errors.find && 'Informe o anime!' }</span> {/* Exibe os erros do useForm */}
            </SearchForm>
            { 
                isLoad ? 
                <SearchLoader /> 
                : 
                <ContainerCards animes={anime} />
            }
        </div>
    );
}

export default Home;