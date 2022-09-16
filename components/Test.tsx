import {
  FC,
  Fragment,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import XmarkIcon from '../icons/XmarkIcon';
import MInusIcon from '../icons/MInusIcon';
import PlusIcon from '../icons/PlusIcon';
import { Card } from './Card/Card';
import FunnelIcon from '../icons/FunnelIcon';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'Law topic', checked: false },
      { value: 'sale', label: 'Law topic 2', checked: false },
      { value: 'travel', label: 'Law topic 3', checked: true },
      { value: 'organization', label: 'Law topic 4', checked: false },
      { value: 'accessories', label: 'Law topic 4', checked: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const DisplayingData: FC<any> = ({ laws }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-600 mx-auto max-w-screen-lg p-6">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-600 py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-600 p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XmarkIcon />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6 dark:text-white"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white dark:bg-gray-600 px-2 py-3 text-gray-400 hover:text-gray-500 dark:text-white">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? <MInusIcon /> : <PlusIcon />}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="flex items-end">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <div className="flex justify-between items-center"></div>
              <span>Filters:- </span> <FunnelIcon />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24 ">
          <div
            className="grid grid-cols-1
          divide-x-4 gap-x-8 gap-y-10 lg:grid-cols-4 "
          >
            {/* Filters */}
            <form className="hidden lg:block dark:text-white ">
              <h3 className="sr-only">Categories</h3>

              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white dark:text-white dark:bg-gray-600 py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? <MInusIcon /> : <PlusIcon />}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-white"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600 dark:text-white"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            {laws.length !== 0 ? (
              <div className="lg:col-span-3 space-y-3 px-5 ">
                {laws.map(
                  (
                    lawInfo: {
                      title:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      description:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      actNum:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      year:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    },
                    id: any
                  ) => (
                    <Card key={id}>
                      <div className="flex justify-between items-center px-4">
                        <div>
                          <h1 className="text-xl font-extrabold">
                            {lawInfo.title}
                          </h1>
                          <p>{lawInfo.description}</p>
                        </div>
                        <div>
                          <p className="text-sm font-light">
                            Act Number:-{' '}
                            <span className="text-sm text-indigo-600 font-mono">
                              {lawInfo.actNum}
                            </span>
                          </p>
                          <p className="text-sm font-light">
                            Year:-{' '}
                            <span className="text-sm text-indigo-600">
                              {lawInfo.year}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center text-xl">
                Loading Please Wait...
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default DisplayingData;