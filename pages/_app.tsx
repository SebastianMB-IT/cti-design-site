import '../styles/globals.css'
import 'cti-design/dist/cti.css';
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router';
import classNames from 'classnames'
import { FaGithub } from 'react-icons/fa'
import { SiStorybook, SiFigma } from 'react-icons/si'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const components = [
    'Get Started',
    'Alert',
    'Avatar',
    'Badge',
    'Button',
    'Card',
    'Switch',
    'Modal',
    'Text Input'
  ]

  return (
    <>
      {
        router.pathname === '/login' ? (
          <Component {...pageProps} />
        ) : (
          <div className='w-full h-full flex flex-col overflow-hidden'>
          {/* Top */}
          <div className='w-full h-20 border-b flex-none flex justify-between'>
            <div className='h-full w-72 border-r flex-none'>
              <div className='flex w-full h-full justify-center items-center text-lg text-neutral-900'>
                CTI DESIGN
              </div>
            </div>
            <div className='h-full flex justify-center items-center px-12 gap-8 text-xl text-gray-700'>
              <a className='cursor-pointer' target='_blank' href='https://github.com/SebastianMB-IT/cti-design' rel="noreferrer">
                <FaGithub />
              </a>
              <a className='cursor-pointer' href='#storybook'>
                <SiStorybook />
              </a>
              <a className='cursor-pointer' href='#figma'>
                <SiFigma />
              </a>
            </div>
          </div>
          {/* Bottom */}
          <div className='flex w-full h-full row-span-2'>
            {/* Sidenav */}
            <div className='h-full flex-none border-r border-gray-200 pt-12 w-72'>
              <nav className='px-2.5 text-gray-700 text-base flex gap-2 flex-col'>
                {
                  components.map(component => {
                    const isActive = router.pathname === `/${component === 'Get Started' ? '' : component.toLocaleLowerCase().replace(/\s/g, '')}`
                    const classes = classNames({
                      'px-4 py-3.5 rounded-2xl cursor-pointer': true,
                      'hover:bg-gray-200': !isActive,
                      'bg-indigo-200 text-indigo-900 font-medium focus:ring-2 focus:border-2 focus:ring-indigo-900 hover:bg-indigo-300': isActive
                    })
                    return (
                      <Link key={component} href={`/${component === 'Get Started' ? '' : component.toLocaleLowerCase().replace(/\s/g, '')}`} >
                        <a aria-selected="true" className={classes}>
                          {component}
                        </a>
                      </Link>
                    )
                  })
                }
              </nav>
            </div>
            {/* Content */}
            <div className='h-[calc(100vh-4rem)] w-full px-12 py-12 overflow-auto'>
              <div className='max-w-7xl m-auto px-10'>
                <Component {...pageProps} />
                <div className='mb-10'></div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </>
  )
}

export default MyApp
