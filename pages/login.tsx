import type { NextPage } from 'next'
import React, { useState } from 'react'
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Base64 from 'crypto-js/enc-base64'
import { useRouter } from 'next/router'
import { TextInput } from 'cti-design'
import { HiEye, HiEyeOff } from 'react-icons/hi'

const Login: NextPage = () => {
  const [pwdVisible, setPwdVisible] = useState(false)

  const router = useRouter()

  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const username = (target.querySelector('input[name="username"]') as HTMLInputElement).value
    const password = (target.querySelector('input[name="password"]') as HTMLInputElement).value

    const res = await fetch('https://nv-seb/webrest/authentication/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const nonce = res.headers.get('www-authenticate')?.split(' ')[0]
    const token = nonce
      ? Base64.stringify(hmacSHA256(`${username}:${password}:${nonce}`, password))
      : ''

    if (token) {
      console.log(`Authentication: ${token}`)
      router.push('/')
    }
  }

  const args = {
    alertTitle: 'This is a info alert',
    alertType: 'More info about this info danger goes here!',
    color: 'red',
    backgroundColor: 'red',
    isAction: true,
    isBorder: false,
    button1Title: 'View more',
    button2Title: 'Dismiss',
  }

  return (
    <div className='bg-gray-100 w-full h-full flex justify-center items-center font-sans'>
      <div className='w-128'>
        {/* Top section */}
        <div className='flex gap-6 flex-col items-center'>
          {/* Logo */}
          <svg
            width='108'
            height='50'
            viewBox='0 0 108 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M51.3176 5.84919C29.8186 28.9371 13.5608 29.5554 2.14106 22.9466C1.80715 22.7533 1.3959 22.7464 1.06055 22.9372C0.499793 23.2561 0.349038 23.9947 0.770553 24.4831C4.73321 29.0743 14.0255 36.6339 22.6275 40.4517C34.4113 45.6816 48.4888 38.5493 61.4195 28.2882C69.5259 21.8553 90.0032 34.637 101.25 43.7609C102.899 45.0986 105.351 43.4235 104.25 41.6077C94.6644 25.7972 70.8352 -15.1109 51.3176 5.84919Z'
              fill='#4F46E5'
            />
          </svg>
          {/* Title section */}
          <div className='flex gap-2 flex-col items-center'>
            {/* Title */}
            <h2 className='font-bold text-3xl'>Sign in to your account</h2>
            {/* Subtitle */}
            <div className='text-gray-600 font-normal text-sm'>
              Or request access to the administrator
            </div>
          </div>
        </div>
        <form onSubmit={doLogin}>
          {/* Middle section */}
          <div className='flex flex-col -space-y-1.5 pt-8'>
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
          </div>
          {/* Bottom section */}
          <div className='mt-6'>
            {/* <div className='flex items-center gap-2'>
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label className="block text-sm text-gray-900" htmlFor="remember-me">
                Remember me
              </label>
            </div> */}
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
