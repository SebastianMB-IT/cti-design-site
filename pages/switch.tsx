import type { NextPage } from 'next'
import Header from '../components/Header'
import { Switch as CTISwitch } from 'cti-design'
import { CopyBlock, googlecode } from 'react-code-blocks'
import snippets from '../components/snippets'
import { Content, SectionProps } from '../components/Content'

const Switch: NextPage = () => {
  const pageSections: SectionProps[] = [
    {
      title: 'Switch Off',
      content: (
        <>
          <CTISwitch changed={(status) => console.log(status)} />
        </>
      ),
      demo: snippets.switch.off,
    },
    {
      title: 'Switch On',
      content: (
        <>
          <CTISwitch on={true} changed={(status) => console.log(status)} />
        </>
      ),
      demo: snippets.switch.on,
    },
    {
      title: 'Switch Off Disabled',
      content: (
        <>
          <CTISwitch disabled={true} changed={(status) => console.log(status)} />
        </>
      ),
      demo: snippets.switch.offDisabled,
    },
    {
      title: 'Switch On Disabled',
      content: (
        <>
          <CTISwitch disabled={true} on={true} changed={(status) => console.log(status)} />
        </>
      ),
      demo: snippets.switch.onDisabled,
    },
    {
      title: 'Switch With Label',
      content: (
        <>
          <CTISwitch label='This is the label' changed={(status) => console.log(status)} />
        </>
      ),
      demo: snippets.switch.withLabel,
    },
  ]

  return (
    <div className='main-content'>
      <Header
        title='Modal'
        description='Modals are used to highlight elements showing it in foreground'
      />
      <Content sections={pageSections} />
    </div>
  )
}

export default Switch
