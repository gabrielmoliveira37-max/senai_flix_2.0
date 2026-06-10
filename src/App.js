import styled from 'styled-components'
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
const AppContainer = styled.div`
width: 100vw;
min-height: 100vh;
background-color: #141414;
`
function App() {
return (
<AppContainer>
<Header />
<Pesquisa />
<UltimosLancamentos />
</AppContainer>
)
}
export default App