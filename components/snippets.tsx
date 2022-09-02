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
/>;`
  },
  // start button
  button: {
    primary: `<Button
  styles='primary'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    large: `<Button
  styles='primary'
  size='large'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    secondary: `<Button
  styles='secondary'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    rounded: `<Button
  styles='primary'
  onClick={() => console.log('clicked')}
  fullRounded={true}
>
  Button
</Button>;`,
    white: `<Button
  styles='white'
  onClick={() => console.log('clicked')}
>
  Button
</Button>;`,
    red: `<Button
  styles='red'
  onClick={() => console.log('clicked')}
>`,
    withIcon: `<Button
  styles='primary'
  onClick={() => console.log('clicked')}
>
  <HiRefresh />
  Button
</Button>`,
    withIconRight: `<Button
  styles='primary'
  onClick={() => console.log('clicked')}
>
  Button
  <HiRefresh />
</Button>`
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
  on={true}
  changed={(status) => console.log(status)}
/>`,
    onDisabled: `<Switch
  on={true}
  changed={(status) => console.log(status)}
/>` 
  }
}

export default snippets
