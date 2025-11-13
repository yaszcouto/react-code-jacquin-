import type { CardProdutosProps } from '../../types/CardProdutosProps';
import './CardProdutos.css';
import bolo_default from '../../assets/imgs/bolo-default.png';
import { formatosService } from '../../services/formatosServices';


export default function CardProduto( {nome, descricao, preco, imagem, id, peso}: CardProdutosProps ) {
    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${ imagem[0]}` : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <div>
            <span>{ formatosService.PrecoBr(preco)}</span>
             <span>{(peso != null) ? formatosService.PesoEmKg(peso) : "qtde não informada" }</span>
            </div>
        </div>

    )
}
