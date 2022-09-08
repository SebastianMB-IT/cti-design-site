import type { NextPage } from 'next'
import React, { useState } from 'react'
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  
  const [pwdVisible, setPwdVisible] = useState(false)

  const router = useRouter()

  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement;
    const username = (target.querySelector('input[name="username"]') as HTMLInputElement).value
    const password = (target.querySelector('input[name="password"]') as HTMLInputElement).value

    const res = await fetch('https://nv-seb/webrest/authentication/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const nonce = res.headers.get('www-authenticate')?.split(' ')[0]
    const token = nonce ? Base64.stringify(hmacSHA256(`${username}:${password}:${nonce}`, password)) : ''

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
    <div className="bg-gray-100 w-full h-full flex justify-center items-center font-sans">
      <div className="w-128">
        {/* Top section */}
        <div className="flex gap-6 flex-col items-center">
          {/* Logo */}
          <svg width="108" height="50" viewBox="0 0 108 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.3176 5.84919C29.8186 28.9371 13.5608 29.5554 2.14106 22.9466C1.80715 22.7533 1.3959 22.7464 1.06055 22.9372C0.499793 23.2561 0.349038 23.9947 0.770553 24.4831C4.73321 29.0743 14.0255 36.6339 22.6275 40.4517C34.4113 45.6816 48.4888 38.5493 61.4195 28.2882C69.5259 21.8553 90.0032 34.637 101.25 43.7609C102.899 45.0986 105.351 43.4235 104.25 41.6077C94.6644 25.7972 70.8352 -15.1109 51.3176 5.84919Z" fill="#4F46E5"/>
          </svg>
          {/* Title section */}
          <div className='flex gap-2 flex-col items-center'>
            {/* Title */}
            <h2 className="font-bold text-3xl">
              Sign in to your account
            </h2>
            {/* Subtitle */}
            <div className="text-gray-600 font-normal text-sm">
              Or request access to the administrator
            </div>
          </div>
        </div>
        <form onSubmit={doLogin}>
          {/* Middle section */}
          <div className="flex flex-col pt-8 -space-y-px">
            <input type="text" name='username' placeholder='Enter your username' className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            <div className="flex w-full items-center relative">
              <input type={pwdVisible ? "text" : 'password'} name="password" placeholder='Enter your password' className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <div className='absolute right-2.5 cursor-pointer z-11' onClick={() => setPwdVisible(!pwdVisible)}>
                {
                  !pwdVisible ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12Z" fill="#71717A"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.457993 10C1.73199 5.943 5.52199 3 9.99999 3C14.478 3 18.268 5.943 19.542 10C18.268 14.057 14.478 17 9.99999 17C5.52199 17 1.73199 14.057 0.457993 10ZM14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 9.99999 14C8.93913 14 7.92171 13.5786 7.17157 12.8284C6.42142 12.0783 5.99999 11.0609 5.99999 10C5.99999 8.93913 6.42142 7.92172 7.17157 7.17157C7.92171 6.42143 8.93913 6 9.99999 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10Z" fill="#71717A"/>
                    </svg> 
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.707 2.293C3.51839 2.11084 3.26579 2.01005 3.00359 2.01233C2.7414 2.01461 2.49058 2.11978 2.30518 2.30518C2.11977 2.49059 2.0146 2.7414 2.01232 3.0036C2.01004 3.2658 2.11084 3.5184 2.293 3.707L16.293 17.707C16.4816 17.8892 16.7342 17.99 16.9964 17.9877C17.2586 17.9854 17.5094 17.8802 17.6948 17.6948C17.8802 17.5094 17.9854 17.2586 17.9877 16.9964C17.9899 16.7342 17.8892 16.4816 17.707 16.293L16.234 14.82C17.7915 13.5781 18.9433 11.8999 19.542 10C18.268 5.943 14.478 3 10 3C8.43243 2.99788 6.8865 3.36586 5.488 4.074L3.708 2.293H3.707ZM7.968 6.553L9.482 8.068C9.82109 7.97795 10.1779 7.97855 10.5167 8.06973C10.8555 8.16092 11.1643 8.33949 11.4124 8.58757C11.6605 8.83565 11.8391 9.14455 11.9303 9.48333C12.0214 9.82212 12.022 10.1789 11.932 10.518L13.446 12.032C13.897 11.268 14.0812 10.3758 13.9696 9.49568C13.8581 8.61556 13.4571 7.7975 12.8298 7.17018C12.2025 6.54287 11.3844 6.1419 10.5043 6.03035C9.6242 5.91881 8.73197 6.10302 7.968 6.554V6.553Z" fill="#71717A"/>
                      <path d="M12.454 16.697L9.74999 13.992C8.77768 13.9311 7.86102 13.5174 7.17205 12.8286C6.48308 12.1398 6.06917 11.2233 6.00799 10.251L2.33499 6.578C1.4902 7.58402 0.852342 8.74692 0.457993 10C1.73199 14.057 5.52299 17 9.99999 17C10.847 17 11.669 16.895 12.454 16.697Z" fill="#71717A"/>
                    </svg>
                  )
                }
              </div>
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
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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