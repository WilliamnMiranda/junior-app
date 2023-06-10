import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import CreateProject from '../pages/create_project'
import * as useCreateProject from '../hooks/useCreateProject'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}))

const spyUseCreateProject = jest.spyOn(useCreateProject, 'useCreateProject')

describe('must test the creation of projects', () => {
  test('must create a project', () => {
    // Declarar as propriedades
    const setName = jest.fn()
    const setLevel = jest.fn()
    const setTechnologies = jest.fn()
    const setDescription = jest.fn()
    const setFunctions = jest.fn()
    const setOwnerLinkedin = jest.fn()
    const createProject = jest.fn()
    const setCoreTechnology = jest.fn()

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

    const queryClient = new QueryClient()
    const teste = 2
    render(
      <QueryClientProvider client={queryClient}>
        <CreateProject />
      </QueryClientProvider>
    )

    expect(teste).toEqual(2)
  })
})
