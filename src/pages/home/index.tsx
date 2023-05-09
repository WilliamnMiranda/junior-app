import Header from '../../components/header'
import * as C from './style'
const HomePage = () => {
  return (
    <C.ContainerHomePage>
      <Header />
      <C.SearchByType>
        <C.Content>
          <C.TittleSearch> Encontre projetos que desafiam e desenvolvem suas habilidades </C.TittleSearch>
          <C.SubTittleSearch> Networking é sobre construir relacionamentos - comece agora </C.SubTittleSearch>
        </C.Content>
      </C.SearchByType>
    </C.ContainerHomePage>
  )
}

export default HomePage
