import type { NextPage } from 'next'
import { useState, RefObject, createRef } from 'react'
import Header from '../components/Header'
import { Modal as ModalComponent, Button, TextInput } from 'cti-design'
import snippets from '../components/snippets'
import { HiOutlineExclamation } from 'react-icons/hi'
import { Content, SectionProps } from '../components/Content'

const Modal: NextPage = () => {
  const [showMondal, setShowMondal] = useState(false)
  const cancelButtonRef: RefObject<HTMLButtonElement> = createRef()
  const [showFormMondal, setShowFormMondal] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('submit', e.target)
    setShowMondal(false)
  }
  const nameInputRef: RefObject<HTMLInputElement> = createRef()

  const pageSections: SectionProps[] = [
    {
      title: 'Danger Modal',
      content: (
        <>
          <Button onClick={() => setShowMondal(true)}>Show modal</Button>
          <ModalComponent
            show={showMondal}
            focus={cancelButtonRef}
            onClose={() => setShowMondal(false)}
          >
            <ModalComponent.Content>
              <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0'>
                <HiOutlineExclamation className='h-6 w-6 text-red-600' aria-hidden='true' />
              </div>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left font-serif'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Delete account</h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    The contact will be deleted definitevely from the phonebook.
                  </p>
                </div>
              </div>
            </ModalComponent.Content>
            <div className='font-serif'>
              <ModalComponent.Actions>
                <Button variant='danger' onClick={() => setShowMondal(false)}>
                  Delete
                </Button>
                <Button variant='light' onClick={() => setShowMondal(false)} ref={cancelButtonRef}>
                  Cancel
                </Button>
              </ModalComponent.Actions>
            </div>
          </ModalComponent>
        </>
      ),
      demo: snippets.modal.danger,
    },
    {
      title: 'Modal With Form',
      content: (
        <>
          <Button onClick={() => setShowFormMondal(true)}>Show modal</Button>
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
                      The contact will be added to the phonebook and will be available pubblicly by
                      default.
                    </p>
                  </div>
                  <div className='mt-3 flex flex-col gap-2'>
                    <TextInput
                      label='Name'
                      placeholder='Enter the name'
                      name='name'
                      ref={nameInputRef}
                    />
                    <TextInput label='Surname' placeholder='Enter the surname' name='surname' />
                    <TextInput label='Number' placeholder='Enter the number' name='number' />
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
          </ModalComponent>
        </>
      ),
      demo: snippets.modal.withForm,
    },
  ]

  return (
    <div className='main-content'>
      <Header
        title='Modal'
        description='Modals are used to highlight elements showing it in foreground'
      />
      <Content sections={pageSections} />
    </div>
  )
}

export default Modal
