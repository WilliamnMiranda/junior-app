import { render } from '@testing-library/react'
import Recomendations from '../pages/project/recomendations'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}))

describe('', () => {
  test('', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: [{ name: 'Project 1', technologies: ['angularjs'], level: 'junior', coreTechnology: 'angularjs' }],
    })
    const queryClient = new QueryClient()
    const screen = render(
      <QueryClientProvider client={queryClient}>
        <Recomendations />
      </QueryClientProvider>
    )
    expect(screen.getByText('Project 1')).toBeInTheDocument()
  })
})
