import type { NextPage } from 'next'
import Header from '../components/Header'
import { Button } from 'cti-design'
import { CopyBlock, googlecode } from "react-code-blocks";
import snippets from '../components/snippets'
import { HiRefresh } from 'react-icons/hi';

const Buttons: NextPage = () => {

  return (
    <div className='main-content'>
      <Header
        title='Button'
        description='Buttons are the most usefull components for the users to accomplish actions'
      />
      <div className='content-section'>
        {/* Primary Button */}
        <h3 className='content-title'>
          Primary Button
        </h3>
        <div className='content-component'>
          <Button styles='primary'>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.primary}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Primary Button */}
        <h3 className='content-title'>
          Primary Button Large
        </h3>
        <div className='content-component'>
          <Button styles='primary' size='large'>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.large}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Rounded button */}
        <h3 className='content-title'>
          Rounded Button
        </h3>
        <div className='content-component'>
          <Button styles='primary' fullRounded={true}>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.rounded}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Secondary Button */}
        <h3 className='content-title'>
          Secondary Button
        </h3>
        <div className='content-component'>
          <Button styles='secondary'>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.secondary}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* White Button */}
        <h3 className='content-title'>
          White Button
        </h3>
        <div className='content-component'>
          <Button styles='white'>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.white}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Red Button */}
        <h3 className='content-title'>
          Red Button
        </h3>
        <div className='content-component'>
          <Button styles='red'>
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.white}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* With Icon */}
        <h3 className='content-title'>
          Button With Icon
        </h3>
        <div className='content-component'>
          <Button styles='primary'>
            <HiRefresh />
            Button
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.withIcon}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* With Icon Right */}
        <h3 className='content-title'>
          Button With Icon Right
        </h3>
        <div className='content-component'>
          <Button styles='primary'>
            Button
            <HiRefresh />
          </Button>
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.button.withIconRight}
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

export default Buttons
