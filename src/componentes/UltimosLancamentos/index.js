import styled from 'styled-components'
import apocalipse from '../../imagens/filmes/apocalipse.jpg'
import dune3 from '../../imagens/filmes/dune3.jpg'
import hellboy from '../../imagens/filmes/hellboy.jpg'
import jackson from '../../imagens/filmes/jackson.jpg'
const lancamentos = [
{ nome: 'Alerta Apocalipse', id: 1, src: apocalipse },
{ nome: 'Dune 3', id: 2, src: dune3 },
{ nome: 'Hell Boy', id: 3, src: hellboy },
{ nome: 'Michael Jackson', id: 4, src: jackson }
]
const LancamentosContainer = styled.section`
background-color: #000000;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #ffffff;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #ff0000ad;
width: 180px;
padding: 20px;

border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
return (
<LancamentosContainer>
<Titulo>Últimos Lançamentos</Titulo>
<Filmes>
{lancamentos.map(filme => (
<FilmeCard>
<Capa src={filme.src} alt={filme.nome} />
<p>{filme.nome}</p>
</FilmeCard>
))}
</Filmes>
</LancamentosContainer>
)
}
export default UltimosLancamentos