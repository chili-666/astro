import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PencilSquare } from '@heroicons/react/24/outline'

let navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Random Thoughts', href: '/random/', current: false },
  { name: 'Code', href: '/code/', current: false },
  { name: 'Recipes', href: '/recipes/', current: false },
  { name: 'Books', href: '/books/', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function ReactNav(props) {
  console.log("Props", props)


  return (
    <Disclosure as="nav" className="bg-everglade-700 p-5 fixed-top">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-everglade-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-coral-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-content-center align-items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-everglade-900 text-white' : 'text-everglade-50 hover:bg-everglade-900 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                      </a>
                    ))}

                   {/* Profile dropdown */}
                <Menu as="div" className="">
                  <div>
                    <Menu.Button className="text-everglade-50 hover:bg-everglade-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      <span className="sr-only">Tags</span>
                      Tags
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  z-10 mt-2 origin-top-right rounded-md bg-everglade-800 text-everglade-100 py-1 shadow-lg shadow-black ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-row">
                      {props.tagItems.map((tag) => (
                           <Menu.Item>
                           {({ active }) => (
                             <a
                               key={tag}
                               href={"/tags/" + tag}
                               className={classNames(active ? 'bg-everglade-400' : '', 'block px-4 py-2 text-sm text-gray-100')}
                             >
                               {tag}
                             </a>
                           )}
                         </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                </div>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://github.com/chili-666/astro" target="_blank">
                    <button
                      type="button"
                      className="rounded-full bg-transparent p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                    </button>
                </a>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
             {/* Profile dropdown */}
             <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="text-everglade-50 hover:bg-everglade-900 hover:text-white">
                      Tags
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {props.tagItems.map((tag) => (
                           <Menu.Item>
                           {({ active }) => (
                             <a
                               key={tag}
                               href={"/tags/" + tag}
                               className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                             >
                               {tag}
                             </a>
                           )}
                         </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


