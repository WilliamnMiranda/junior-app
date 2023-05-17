import styled from 'styled-components'

export const ContainerScreenLogin = styled.div`
  background-color: rgb(241, 241, 241);
  height: 100vh;
  overflow: hidden;
`
export const ContainerLogin = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  padding: 30px;
  width: 550px;
  background-color: white;
`
export const ContainerOneInput = styled.div`
  width: 100%;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 25px;
`

export const Label = styled.label`
  font-size: 1em;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  height: 37px;
  width: 100%;
  outline: none;
  padding: 0px 10px;
`
export const RecoverPassword = styled.p`
  margin-top: 10px;
  font-size: 0.8em;
  font-style: italic;
  font-family: 'Inter';
  :hover {
    color: rgb(13, 149, 225);
    cursor: pointer;
  }
`
export const ButtonSubmit = styled.button`
  text-transform: uppercase;
  height: 50px;
  cursor: pointer;
  font-weight: 400;
  border: none;
  background-color: rgb(13, 149, 225);
  font-family: 'Poppins', sans-serif;
  width: 100%;
  color: white;
`
export const CreateAccount = styled.p`
  margin-top: 10px;
  cursor: pointer;
  font-size: 1em;
  font-style: italic;
  font-family: 'Poppins', sans-serif;
  :hover {
    color: rgb(13, 149, 225);
    cursor: pointer;
  }
`
export const Image = styled.img`
  width: 400px;
  margin-bottom: 10px;
`
