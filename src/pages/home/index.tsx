import Header from '../../components/header'
import popularLanguages from '../../utils/languages'
import * as C from './style'
const HomePage = () => {
  return (
    <C.ContainerHomePage>
      <Header />
      <C.SearchByType>
        <C.Content>
          <C.TittleSearch> Encontre projetos que desafiam e desenvolvem suas habilidades </C.TittleSearch>
          <C.SubTittleSearch> Networking é sobre construir relacionamentos - comece agora </C.SubTittleSearch>
          <C.ContainerInputSearch>
            <C.InputSearch />
            <C.ButtonSearchByType> ENCONTRAR </C.ButtonSearchByType>
          </C.ContainerInputSearch>
        </C.Content>
      </C.SearchByType>

      <C.PopularTypes>
        <C.TittlePopularLanguages>Linguagems populares </C.TittlePopularLanguages>
        <C.ContainerIconsLanguages>
          {popularLanguages.map((item) => {
            return (
              <>
                <C.ContainerIcon>
                  <C.IconLanguage key={item.name} src={item.icon} alt={item.name} />
                </C.ContainerIcon>
              </>
            )
          })}
        </C.ContainerIconsLanguages>
      </C.PopularTypes>
    </C.ContainerHomePage>
  )
}

export default HomePage
