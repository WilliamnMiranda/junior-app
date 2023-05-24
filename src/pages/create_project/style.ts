import styled from 'styled-components'

export const ContainerCreateProject = styled.div`
  padding: 0 100px;
  @media (max-width: 1480px) {
    padding: 0 50px;
  }
  @media (max-width: 925px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`
export const HeaderCreateJob = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background-color: #f4f5f7;
  margin: 0px 0px 20px 0px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3em;
  font-family: 'Inter', sans-serif;
`

export const ContainerInfosProject = styled.form`
  padding: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
`
export const ContainerOneInput = styled.div`
  width: 100%;
`
export const ContainerTwoInputs = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const ContainerInfoTwoInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Label = styled.label`
  font-size: 1.2em;
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
export const InputDescription = styled.textarea`
  height: 210px;
  padding: 3px 5px;
  font-size: 1.4em;
  resize: none;
`
export const ButtonSubmit = styled.button`
  margin-top: 15px;
  height: 40px;
  font-weight: 400;
  border: none;
  background-color: rgb(13, 149, 225);
  font-family: 'Poppins', sans-serif;
  width: 210px;
  color: white;
`
