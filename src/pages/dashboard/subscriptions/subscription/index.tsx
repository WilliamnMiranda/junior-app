import { useState } from 'react'
import * as C from './style'
import { AiFillEye, AiOutlineCloseCircle } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
type options = 'my' | 'they'
interface IProps {
  subscription: any
  type: options
}

function Subscription({ subscription, type }: IProps) {
  console.log(subscription)

  const [level, setLevel] = useState('')
  return (
    <C.ContainerProject>
      <C.ContainerInfo>
        <C.TittleProject>{type === 'they' ? subscription.project[0].name : subscription.project.name}</C.TittleProject>
        <C.ContainerNameUserSubscription>
          <div>usuario:</div>
          <C.NameUserSubscription>
            {type === 'they' ? subscription.user[0].name : subscription.user.name}
          </C.NameUserSubscription>
        </C.ContainerNameUserSubscription>
      </C.ContainerInfo>
      <C.ContainerIconsAndName>
        <C.ContainerIcons>
          <C.ContainerItemView>
            <AiFillEye />
          </C.ContainerItemView>
          <C.ContainerItemView>
            <MdModeEdit />
          </C.ContainerItemView>
          <C.ContainerItemView>
            <AiOutlineCloseCircle />
          </C.ContainerItemView>
        </C.ContainerIcons>
      </C.ContainerIconsAndName>
    </C.ContainerProject>
  )
}

export default Subscription
