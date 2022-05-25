import React from 'react'
import { useEffect } from 'react'

export const Modal = ({ modalContent, toggleModal }) => {
  useEffect(() => {
    toggleModal()
  }, [])

  return <div className='modal'>{modalContent}</div>
}
