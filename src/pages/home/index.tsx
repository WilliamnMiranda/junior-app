import Header from '../../components/header'
import * as C from './style'
const HomePage = () => {
  return (
    <C.ContainerHomePage>
      <Header />
      <C.SearchByType></C.SearchByType>
    </C.ContainerHomePage>
  )
}

export default HomePage
