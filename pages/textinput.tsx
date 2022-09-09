import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'
import { TextInput } from 'cti-design'
import snippets from '../components/snippets'
import { MdError } from 'react-icons/md'
import { HiMail, HiEye, HiEyeOff } from 'react-icons/hi'
import { Content, SectionProps } from '../components/Content'

const Input: NextPage = () => {
  const [pwdVisible, setPwdGroupVisible] = useState(false)
  const [pwdDynamicVisible, setPwdVisible] = useState(false)

  const pageSections: SectionProps[] = [
    {
      title: 'Text Input Base',
      content: <TextInput placeholder='This is a placeholder' name='name' />,
      demo: snippets.textInput.base,
    },
    {
      title: 'Text Input Large',
      content: <TextInput placeholder='This is a placeholder' name='name' size='large' />,
      demo: snippets.textInput.large,
    },
    {
      title: 'Text Input With Label',
      content: (
        <TextInput placeholder='This is a placeholder' name='name' label='This is a label' />
      ),
      demo: snippets.textInput.withLabel,
    },
    {
      title: 'Text Input With Leading Icon',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          icon={HiMail}
        />
      ),
      demo: snippets.textInput.withLeadingIcon,
    },
    {
      title: 'Text Input With Trailing Icon',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          icon={HiMail}
          trailingIcon={true}
          onIconClick={() => console.log('icon clicked')}
        />
      ),
      demo: snippets.textInput.withTrailingIcon,
    },
    {
      title: 'Text Input With Error',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          error={true}
        />
      ),
      demo: snippets.textInput.withError,
    },
    {
      title: 'Text Input Error With Helper',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          error={true}
          helper='This is a helper text'
        />
      ),
      demo: snippets.textInput.errorWithHelper,
    },
    {
      title: 'Text Input Error Helper With Icon',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          error={true}
          helper='This is a helper text'
          icon={MdError}
          trailingIcon={true}
        />
      ),
      demo: snippets.textInput.errorHelperWithIcon,
    },
    {
      title: 'Text Input Squared',
      content: (
        <TextInput
          placeholder='This is a placeholder'
          name='name'
          label='This is a label'
          squared='top'
        />
      ),
      demo: snippets.textInput.squared,
    },
    {
      title: 'Password Input',
      content: (
        <TextInput
          placeholder='Enter your password'
          name='password'
          label='Password'
          type={pwdDynamicVisible ? 'text' : 'password'}
          icon={pwdDynamicVisible ? HiEyeOff : HiEye}
          onIconClick={() => setPwdVisible(!pwdDynamicVisible)}
          trailingIcon={true}
        />
      ),
      demo: snippets.textInput.passwordInput,
    },
    {
      title: 'Login Input Group',
      content: (
        <div className='flex flex-col -space-y-1.5'>
          <TextInput placeholder='Enter your username' name='username' squared='bottom' />

          <div className='pt-px'>
            <TextInput
              placeholder='Enter your password'
              name='password'
              squared='top'
              type={pwdVisible ? 'text' : 'password'}
              icon={pwdVisible ? HiEyeOff : HiEye}
              onIconClick={() => setPwdGroupVisible(!pwdVisible)}
              trailingIcon={true}
            />
          </div>
        </div>
      ),
      demo: snippets.textInput.inputGroup,
    },
  ]

  return (
    <div className='main-content'>
      <Header
        title='Text Input'
        description='Text Input is the main component used for data entry'
      />
      <Content sections={pageSections} />
    </div>
  )
}

export default Input
