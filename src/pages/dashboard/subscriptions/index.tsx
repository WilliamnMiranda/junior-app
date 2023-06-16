import * as C from './style'
import LayoutDashboard from '../layout'
import { useQuery } from '@tanstack/react-query'
import nodata from '../../../images/nodata.svg'
import subscriptionServices from '../../../services/subscription'
import Subscription from './subscription'
const Projects = () => {
  const { data } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => subscriptionServices.getAll(),
    retry: false,
  })
  const myProject_data = useQuery({
    queryKey: ['my_subscriptions'],
    queryFn: () => subscriptionServices.getMySubscriptionsProject(),
  })
  return (
    <LayoutDashboard>
      <C.ContainerProjects>
        <C.ContainerProjectOwner>
          <C.ContainerHeader>
            <C.Tittle>Minhas inscricoes</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            {myProject_data.data?.length > 0 ? (
              myProject_data.data?.map((subscription: any) => <Subscription subscription={subscription} type="my" />)
            ) : (
              <C.ContainerNoData>
                <img src={nodata} />
                <p>Voce nao possui inscricoes</p>
              </C.ContainerNoData>
            )}
          </C.ProjectsList>
        </C.ContainerProjectOwner>

        <C.ContainerProjectParticipant>
          <C.ContainerHeader>
            <C.Tittle> Inscricoes em meus projetos</C.Tittle>
          </C.ContainerHeader>
          <C.ProjectsList>
            {data?.length > 0 ? (
              data?.map((subscription: any) => <Subscription subscription={subscription} type="they" />)
            ) : (
              <C.ContainerNoData>
                <img src={nodata} />
                <p>Voce nao possui inscricoes</p>
              </C.ContainerNoData>
            )}
          </C.ProjectsList>
        </C.ContainerProjectParticipant>
      </C.ContainerProjects>
    </LayoutDashboard>
  )
}

export default Projects
