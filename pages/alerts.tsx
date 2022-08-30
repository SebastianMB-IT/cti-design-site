import type { NextPage } from 'next'
import Header from '../components/Header'
import { Alert } from 'cti-design'
import { HiInformationCircle } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';

const Alerts: NextPage = () => {

  return (
    <div className='flex flex-col gap-10'>
      <Header
        title='Alerts'
        description='Alerts can be used to give important feedbacks to the user without interrupting their current tasks'
      />
      {/* Content Section */}
      <div className='w-full rounded-xxl border px-12 py-12'>
        {/* Simple alert */}
        <h3 className='text-2xl mb-6'>
          Simple
        </h3>
        <Alert
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
      </div>
      {/* Content Section */}
      <div className='w-full rounded-xxl border px-12 py-12'>
        {/* Bordered alert */}
        <h3 className='text-2xl mb-6'>
          Bordered
        </h3>
        <Alert
          alertType='A simple info alert'
          icon={<HiInformationCircle />}
          isAction={false}
          isBorder={true}
        />
      </div>
      {/* Content Section */}
      <div className='w-full rounded-xxl border px-12 py-12'>
        {/* Alert with action */}
        <h3 className='text-2xl mb-6'>
          With Actions
        </h3>
        <Alert
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
      </div>

      <div className='h-10'></div>
    </div>
  )
}

export default Alerts
