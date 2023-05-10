import styled from 'styled-components'

export const ContainerHomePage = styled.main`
    width: 100%;
`

export const SearchByType = styled.section`
    height: 220px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content= styled.article`
    text-align: center;
    width: 55%;
`

export const TittleSearch = styled.h1`
    color: white;
    line-height: 120%;
    font-size: 1.7em;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    margin-bottom: 15px;
`
 export const SubTittleSearch = styled.h2`
    color: white;
    line-height: 120%;
    font-size: 0.9em;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
    font-family: 'Roboto', sans-serif;
`

export const ContainerInputSearch = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
`
export const InputSearch = styled.input`
    width: 70%;
    outline: none;
    height: 35px;
    font-family: 'Inter', sans-serif;
    padding: 0px 10px;
`
export const ButtonSearchByType = styled.button`
    width:200px;
    height: 35px;
    font-size: 0.9em;
    background-color: rgb(13,149,225);
    font-family: 'Roboto', sans-serif;
    color: rgba(255,255,255,1);
    border:none;
    cursor: pointer;
`