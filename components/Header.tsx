import React from 'next'

type HeaderProps = {
  title: string;
  description: string;
}

const Header = ({
  title,
  description
}: HeaderProps): JSX.Element => {

  return (
    <div className='w-full bg-indigo-100 rounded-xxl flex flex-col px-32 py-32 gap-7'>
      <h1 className='text-6xl text-indigo-900'>
        {title}
      </h1>
      <h2 className='text-xl max-w-2xl text-indigo-900'>
        {description}
      </h2>
    </div>
  )
}

export default Header
