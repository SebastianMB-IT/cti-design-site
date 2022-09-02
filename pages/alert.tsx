import type { NextPage } from 'next'
import Header from '../components/Header'
import { Alert } from 'cti-design'
import { HiInformationCircle } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';
import { CopyBlock, googlecode } from "react-code-blocks";
import snippets from '../components/snippets'

const Alerts: NextPage = () => {

  const SimpleAlert = () => <Alert
    alertTitle='Title'
    alertType='A simple info alert'
    icon={<HiInformationCircle />}
    isAction={false}
    isBorder={false}
    isSimple={true}
  />

  const BorderedAlert = () => <Alert
    alertTitle='Title'
    alertType='Asimple info alert'
    icon={<HiInformationCircle />}
    isAction={false}
    isBorder={true}
  />

  const AlertWithAction = () => <Alert
    alertTitle='This is a info alert'
    alertType='More info about this info danger goes here!'
    color='red'
    backgroundColor='red'
    icon={<HiInformationCircle />}
    iconButton={<AiFillEye />}
    isAction={true}
    isBorder={false}
    button1Title='View more'
    button2Title='Dismiss'
  />

  return (
    <div className='main-content'>
      <Header
        title='Alert'
        description='Alerts can be used to give important feedbacks to the user without interrupting their current tasks'
      />
      <div className='content-section'>
        {/* Simple alert */}
        <h3 className='content-title'>
          Simple Alert
        </h3>
        <div className='content-component'>
          <SimpleAlert />  
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.alert.simple}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Bordered alert */}
        <h3 className='content-title'>
          Bordered Alert
        </h3>
        <div className='content-component'>
          <BorderedAlert />  
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.alert.bordered}
            showLineNumbers={false}
            theme={googlecode}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className='content-section'>
        {/* Bordered alert */}
        <h3 className='content-title'>
          Alert With Action
        </h3>
        <div className='content-component'>
          <AlertWithAction />  
        </div>
        <div className='content-demo'>
          <CopyBlock
            language={'jsx'}
            text={snippets.alert.simple}
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

export default Alerts
