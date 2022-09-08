import type { NextPage } from 'next'
import Header from '../components/Header'
import { CopyBlock, googlecode } from 'react-code-blocks'
import snippets from '../components/snippets'
import { Content, SectionProps } from '../components/Content'

const GetStartd: NextPage = () => {

  const pageSections: SectionProps[] = [
    {
      title: 'Install',
      content: <></>,
      demo: `npm install -save cti-design`,
    },
    {
      title: 'Import Styles',
      content: <></>,
      demo: `import 'cti-design/dist/tailwind.css';`,
    },
  ]

  return (
    <div className='main-content'>
      <Header
        title='CTI Design Library'
        description='Welcome to the documentation of our Design Library, a Library that provides UI Components to build applications suitable for the end user'
      />
      <Content sections={pageSections} />
    </div>
  )
}

export default GetStartd
