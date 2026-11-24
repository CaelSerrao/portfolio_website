import { StrictMode } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('portfolio visitor journeys', () => {
  it('filters the gallery and restores all projects', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(10)
    await user.click(screen.getByRole('button', { name: 'Data' }))
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(
      screen.getByRole('heading', { name: 'Escape the Feed', level: 3 }),
    ).toBeVisible()
    expect(screen.getByRole('status')).toHaveTextContent('1 project shown')
    await user.click(screen.getByRole('button', { name: 'Applications' }))
    expect(screen.getAllByRole('article')).toHaveLength(7)
    await user.click(screen.getByRole('button', { name: 'AI & vision' }))
    expect(screen.getAllByRole('article')).toHaveLength(4)
    await user.click(screen.getByRole('button', { name: /All work/ }))
    expect(screen.getAllByRole('article')).toHaveLength(10)
  })
  it('finds the honours thesis under Research and the Kotlin demo under Mobile', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Research' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: 'Ethical Bias in Text-to-Video Models',
        level: 3,
      }),
    ).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Mobile' }))
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(
      screen.getByRole('heading', {
        name: 'DroidDex',
        level: 3,
      }),
    ).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Products' }))
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
  it('shows Modsquad awards without inventing a repository link', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(
      screen.getByRole('button', { name: 'Modsquad project details' }),
    )
    const dialog = screen.getByRole('dialog', { name: 'Modsquad' })
    expect(
      within(dialog).getByText(
        'Innovation Prize — RBC Student Pitch Competition',
      ),
    ).toBeVisible()
    expect(
      within(dialog).getByText(
        'Winner — Barrett Chair Entrepreneurship Competition',
      ),
    ).toBeVisible()
    expect(
      within(dialog).queryByRole('link', { name: /View source/ }),
    ).not.toBeInTheDocument()
    await user.click(
      within(dialog).getByRole('button', { name: 'Close project details' }),
    )
    await user.click(
      screen.getByRole('button', {
        name: 'Ethical Bias in Text-to-Video Models project details',
      }),
    )
    const research = screen.getByRole('dialog', {
      name: 'The Mitigation of Ethical Bias in Text-to-Video Models Using Facial Synthesis',
    })
    expect(
      within(research).getByText('Research Ethics Board application complete.'),
    ).toBeVisible()
    expect(
      within(research).getByText('Manuscript in preparation'),
    ).toBeVisible()
  })
  it('opens project details, closes on cancel, and returns focus', async () => {
    const user = userEvent.setup()
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    const trigger = screen.getByRole('button', {
      name: 'Jarvis project details',
    })
    await user.click(trigger)
    const dialog = screen.getByRole('dialog', { name: 'Jarvis' })
    expect(
      within(dialog).getByRole('link', { name: /View source/ }),
    ).toHaveAttribute(
      'href',
      'https://github.com/CaelSerrao/Jarvis-HackAtlantic-Project',
    )
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
    await user.click(
      screen.getByRole('button', { name: 'Read about Kat Translator' }),
    )
    expect(screen.getByRole('dialog', { name: 'Kat Translator' })).toBeVisible()
    await user.click(
      screen.getByRole('button', { name: 'Close project details' }),
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
  it('closes mobile navigation after selecting a section', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(
      within(screen.getByRole('navigation')).getByRole('link', {
        name: 'About',
      }),
    )
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
