import type { NextPage } from 'next'
import Header from '../components/Header'
import { Button } from 'cti-design'
import snippets from '../components/snippets'
import { HiRefresh } from 'react-icons/hi'
import { Content, SectionProps } from '../components/Content'

const Buttons: NextPage = () => {
  const pageSections: SectionProps[] = [
    {
      title: 'Primary Button',
      content: (
        <>
          <Button variant='primary'>Button</Button>
        </>
      ),
      demo: snippets.button.primary,
    },
    {
      title: 'Primary Button Large',
      content: (
        <>
          <Button variant='primary' size='large'>
            Button
          </Button>
        </>
      ),
      demo: snippets.button.primary,
    },
    {
      title: 'Rounded Button',
      content: (
        <>
          <Button variant='primary' rounded='full'>
            Button
          </Button>
        </>
      ),
      demo: snippets.button.rounded,
    },
    {
      title: 'Secondary Button',
      content: (
        <>
          <Button variant='secondary'>Button</Button>
        </>
      ),
      demo: snippets.button.secondary,
    },
    {
      title: 'Light Button',
      content: (
        <>
          <Button variant='light'>Button</Button>
        </>
      ),
      demo: snippets.button.light,
    },
    {
      title: 'Danger Button',
      content: (
        <>
          <Button variant='danger'>Button</Button>
        </>
      ),
      demo: snippets.button.danger,
    },
    {
      title: 'Button With Icon',
      content: (
        <>
          <Button variant='primary'>
            <HiRefresh />
            Button
          </Button>
        </>
      ),
      demo: snippets.button.withIcon,
    },
    {
      title: 'Button With Icon Right',
      content: (
        <>
          <Button variant='primary'>
            Button
            <HiRefresh />
          </Button>
        </>
      ),
      demo: snippets.button.withIconRight,
    },
  ]

  return (
    <div className='main-content'>
      <Header
        title='Button'
        description='Buttons are the most usefull components for the users to accomplish actions'
      />
      <Content sections={pageSections} />
    </div>
  )
}

export default Buttons
