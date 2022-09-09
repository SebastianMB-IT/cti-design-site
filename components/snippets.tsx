const snippets = {
  // start alert
  alert: {
    simple: `<Alert
  alertType='A simple info alert'
  icon={<HiInformationCircle />}
  isAction={false}
  isBorder={false}
  isSimple={true}
/>;`,
    bordered: `<Alert
  alertType='Asimple info alert'
  icon={<HiInformationCircle />}
  isAction={false}
  isBorder={true}
/>;`,
    withAction: `<Alert
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
/>;`,
  },
  // start button
  button: {
    primary: `<Button
  variant='primary'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    large: `<Button
  variant='primary'
  size='large'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    secondary: `<Button
  variant='secondary'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    rounded: `<Button
  variant='primary'
  onClick={() => console.log('clicked')}
  rounded='full'
>
  Button
</Button>;`,
    light: `<Button
  variant='light'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    danger: `<Button
  variant='danger'
  onClick={() => console.log('clicked')}
>`,
    withIcon: `<Button
  variant='primary'
  onClick={() => console.log('clicked')}
>
  <HiRefresh />
  Button
</Button>`,
    withIconRight: `<Button
  variant='primary'
  onClick={() => console.log('clicked')}
>
  Button
  <HiRefresh />
</Button>`,
  },
  // start switch
  switch: {
    off: `<Switch
  changed={(status) => console.log(status)}
/>`,
    on: `<Switch
  on={true}
  changed={(status) => console.log(status)}
/>`,
    offDisabled: `<Switch
  disabled={true}
  changed={(status) => console.log(status)}
/>`,
    onDisabled: `<Switch
  on={true}
  disabled={true}
  changed={(status) => console.log(status)}
/>`,
    withLabel: `<Switch
  label='This is the label'
  changed={(status) => console.log(status)}
/>`,
  },
  modal: {
    danger: `<Button onClick={() => setShowMondal(true)}>Show modal</Button>
<ModalComponent
  show={showMondal}
  focus={cancelButtonRef}
  onClose={() => setShowMondal(false)}
>
  <ModalComponent.Content>
    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0'>
      <HiOutlineExclamation
        className='h-6 w-6 text-red-600'
        aria-hidden='true'
      />
    </div>
    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left font-serif'>
      <h3 className='text-lg font-medium leading-6 text-gray-900'>
        Delete account
      </h3>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'>
          The contact will be deleted definitevely from the phonebook.
        </p>
      </div>
    </div>
  </ModalComponent.Content>
  <ModalComponent.Actions>
    <Button variant='danger' onClick={() => setShowMondal(false)}>
      Delete
    </Button>
    <Button
      variant='light'
      onClick={() => setShowMondal(false)}
      ref={cancelButtonRef}
    >
      Cancel
    </Button>
  </ModalComponent.Actions>
</ModalComponent>`,
    withForm: `<Button onClick={() => setShowFormMondal(true)}>Show modal</Button>
<ModalComponent
  show={showFormMondal}
  focus={nameInputRef}
  onClose={() => setShowFormMondal(false)}
>
  <form onSubmit={handleSubmit}>
    <ModalComponent.Content>
      <div className='mt-3 text-center sm:mt-0 sm:text-left w-full font-serif'>
        <h3 className='text-lg font-medium leading-6 text-gray-900 text-center'>
          Add account
        </h3>
        <div className='mt-2'>
          <p className='text-sm text-gray-500 text-center'>
            The contact will be added to the phonebook and will be
            available pubblicly by default.
          </p>
        </div>
        <div className='mt-3 flex flex-col gap-2'>
          <TextInput
            label='Name'
            placeholder='Enter the name'
            name='name'
            ref={nameInputRef}
          />
          <TextInput
            label='Surname'
            placeholder='Enter the surname'
            name='surname'
          />
          <TextInput
            label='Number'
            placeholder='Enter the number'
            name='number'
          />
        </div>
      </div>
    </ModalComponent.Content>
    <div className='font-serif'>
      <ModalComponent.Actions>
        <Button variant='primary' onClick={() => setShowFormMondal(false)}>
          Save
        </Button>
        <Button variant='light' onClick={() => setShowFormMondal(false)}>
          Cancel
        </Button>
      </ModalComponent.Actions>
    </div>
  </form>
</ModalComponent>`,
  },
  textInput: {
    base: `<TextInput
  placeholder='This is a placeholder'
  name='name'
/>`,
    large: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  size='large'
/>`,
    withLabel: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
/>`,
    withLeadingIcon: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  icon={HiMail}
/>`,
    withTrailingIcon: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  icon={HiMail}
  iconRight={true}
  onIconClick={() => console.log('icon clicked')}
/>`,
    withError: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  error={true}
/>`,
    errorWithHelper: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  error={true}
  helper='This is a helper text'
/>`,
    errorHelperWithIcon: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  error={true}
  helper='This is a helper text'
  icon={MdError}
  iconRight={true}
/>`,
    squared: `<TextInput
  placeholder='This is a placeholder'
  name='name'
  label='This is a label'
  squared='top'
/>`,
    passwordInput: `<TextInput
  placeholder='Enter your password'
  name='password'
  label='Password'
  type={pwdDynamicVisible ? 'text' : 'password'}
  icon={pwdDynamicVisible ? HiEyeOff : HiEye}
  onIconClick={() => setPwdVisible(!pwdDynamicVisible)}
  trailingIcon={true}
/>`,
    inputGroup: `<div className='flex flex-col -space-y-1.5'>
  <TextInput placeholder='Enter your username' name='username' squared='bottom' />

  <div className='pt-px'>
    <TextInput
      placeholder='Enter your password'
      name='password'
      squared='top'
      type={pwdVisible ? 'text' : 'password'}
      icon={pwdVisible ? HiEyeOff : HiEye}
      onIconClick={() => setPwdVisible(!pwdVisible)}
      trailingIcon={true}
    />
  </div>
</div>`,
  }
}

export default snippets
