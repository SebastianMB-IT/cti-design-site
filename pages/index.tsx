import type { NextPage } from 'next'
import Header from '../components/Header'
import { CopyBlock, googlecode } from 'react-code-blocks'
import snippets from '../components/snippets'

const GetStartd: NextPage = () => {

  return (
    <div className='main-content'>
      <Header
        title='CTI Design Library'
        description='Welcome to the documentation of our Design Library, a Library that provides UI Components to build applications suitable for the end user'
      />
      {/* section */}
      <div className='content-section'>
        <h3 className='content-title'>
          Install
        </h3>
        <div className='content-demo'>
          <CopyBlock
            language={'shell'}
            text={`npm install -save cti-design`}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      {/* section */}
      <div className='content-section'>
        <h3 className='content-title'>
          Import Styles
        </h3>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={`import 'cti-design/dist/tailwind.css';`}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}

export default GetStartd
