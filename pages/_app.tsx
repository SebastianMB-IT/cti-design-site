import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router';
import classNames from 'classnames'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const components = [
    'Welcome',
    'Alerts',
    'Avatars',
    'Badges',
    'Buttons',
    'Cards'
  ]

  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      {/* Top */}
      <div className='w-full h-20 border-b flex-none'>
        <div className='h-full w-72 border-r flex-none'>
        </div>
      </div>
      {/* Bottom */}
      <div className='flex w-full h-full row-span-2'>
        {/* Sidenav */}
        <div className='h-full flex-none border-r border-gray-200 pt-12 w-72'>
          <nav className='px-2.5 text-gray-700 text-base flex gap-2 flex-col'>
            {
              components.map(component => {
                const isActive = router.pathname === `/${component === 'Welcome' ? '' : component.toLocaleLowerCase()}`
                const classes = classNames({
                  'px-4 py-3.5 rounded-2xl cursor-pointer': true,
                  'hover:bg-gray-200': !isActive,
                  'bg-indigo-200 text-indigo-900 font-medium focus:ring-2 focus:border-2 focus:ring-indigo-900 hover:bg-indigo-300': isActive
                })
                return (
                  <Link key={component} href={`/${component === 'Welcome' ? '' : component.toLocaleLowerCase()}`} >
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
        <div className='w-full h-full px-12 py-12 overflow-auto'>
          <div className='max-w-7xl m-auto'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
