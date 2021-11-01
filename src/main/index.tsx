import ReactDOM from 'react-dom'; // responsavél por montar o componente no DOM
import App from '@/main/App'; 

ReactDOM.render(
    <App/>, // O primeiro parâmetro é o componente que será renderizado
    document.getElementById('main') // pega o elemento do DOM que tem o id main no index.html
);
