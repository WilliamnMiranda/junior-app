import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import CreateProject from '../pages/create_project'
import * as useCreateProject from '../hooks/useCreateProject'
import { store } from '../store'
import { Provider } from 'react-redux'
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}))

const spyUseCreateProject = jest.spyOn(useCreateProject, 'useCreateProject')

describe('must test the creation of projects', () => {
  test('must create a project', () => {
    const setName = jest.fn()
    const setLevel = jest.fn()
    const setTechnologies = jest.fn()
    const setDescription = jest.fn()
    const setFunctions = jest.fn()
    const setOwnerLinkedin = jest.fn()
    const createProject = jest.fn()
    const setCoreTechnology = jest.fn()
    const queryClient = new QueryClient()
    const teste = 2
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
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <CreateProject />
        </Provider>
      </QueryClientProvider>
    )

    expect(teste).toEqual(2)
  })
})
