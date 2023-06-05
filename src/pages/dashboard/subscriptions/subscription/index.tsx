import { useState } from 'react'
import * as C from './style'
import { AiFillEye, AiOutlineCloseCircle } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import Select from 'react-select'
interface IProps {
  subscription: any
}

function Subscription({ subscription }: IProps) {
  console.log(subscription)

  const [level, setLevel] = useState('')
  return (
    <C.ContainerProject>
      <C.ContainerInfo>
        <C.TittleProject>{subscription.project[0].name}</C.TittleProject>
        <C.ContainerNameUserSubscription>
          <div>usuario:</div>
          <C.NameUserSubscription>{subscription.user[0].name}</C.NameUserSubscription>
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
