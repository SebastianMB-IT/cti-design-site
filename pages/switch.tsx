import type { NextPage } from 'next'
import Header from '../components/Header'
import { Switch as CTISwitch } from 'cti-design'
import { CopyBlock, googlecode } from "react-code-blocks";
import snippets from '../components/snippets'

const Switch: NextPage = () => {

  return (
    <div className='main-content'>
      <Header
        title='Switch'
        description='Switches are used by the users to enable and to disable settings or to agree or disagree with some fields'
      />
      {/* section */}
      <div className='content-section'>
        <h3 className='content-title'>
          Switch Off
        </h3>
        <div className='content-component'>
          <CTISwitch changed={(status) => console.log(status)} />
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.switch.off}
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
          Switch On
        </h3>
        <div className='content-component'>
          <CTISwitch on={true} changed={(status) => console.log(status)} />
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.switch.on}
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
          Switch Off Disabled
        </h3>
        <div className='content-component'>
          <CTISwitch disabled={true} changed={(status) => console.log(status)} />
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.switch.offDisabled}
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
          Switch On Disabled
        </h3>
        <div className='content-component'>
          <CTISwitch disabled={true} on={true} changed={(status) => console.log(status)} />
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.switch.onDisabled}
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

export default Switch
