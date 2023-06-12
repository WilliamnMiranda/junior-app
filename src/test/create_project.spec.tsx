import { fireEvent, render, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import CreateProject from '../pages/create_project'
import * as useCreateProject from '../hooks/useCreateProject'
import { store } from '../store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}))

const spyUseCreateProject = jest.spyOn(useCreateProject, 'useCreateProject')

describe('must test the creation of projects', () => {
  test('must create a project', async () => {
    const setName = jest.fn()
    const setLevel = jest.fn()
    const setTechnologies = jest.fn()
    const setDescription = jest.fn()
    const setFunctions = jest.fn()
    const setOwnerLinkedin = jest.fn()
    const createProject = jest.fn()
    const setCoreTechnology = jest.fn()
    const queryClient = new QueryClient()
    ;(useQuery as jest.Mock).mockReturnValue({
      data: [
        { name: 'Project 1', technologies: ['angularjs'], level: 'junior', coreTechnology: 'angularjs', _id: '123' },
      ],
    })
    spyUseCreateProject.mockReturnValue({
      setName,
      setLevel,
      setTechnologies,
      setDescription,
      setFunctions,
      setOwnerLinkedin,
      createProject,
      setCoreTechnology,
    })
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <CreateProject />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    )
    const createButton = getByText('CRIAR')

    const nameInput = getByPlaceholderText('Aplicativo de delivery')
    const description = getByPlaceholderText('O projeto ...')

    fireEvent.change(nameInput, { target: { value: 'My Project' } })
    fireEvent.change(description, { target: { value: 'Project Description' } })
    expect(nameInput).toHaveValue('My Project')
    expect(description).toHaveValue('Project Description')
    fireEvent.click(createButton)

    await waitFor(() => {
      expect(createProject).toHaveBeenCalled()
    })
  })
})
