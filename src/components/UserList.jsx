import React from 'react'
import { useState, useReducer } from 'react'
import { UserPreview } from './UserPreview'
import { Modal } from './Modal'
// REDUCER
import { reducer, initialState } from '../userReducer'

export const UserList = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUser = () => {
    const username = prompt('Add user name')
    if (username) {
      const user = {
        id: new Date().getTime().toString(),
        username,
        favorites: [],
      }
      dispatch({ type: 'ADD_USER', user })
    } else {
      dispatch({ type: 'NO_USERNAME' })
    }
  }

  const removeUser = (userId) => {
    console.log(userId)
    if (userId) {
      dispatch({ type: 'REMOVE_USER', userId })
    }
  }

  const toggleModal = () => {
    setTimeout(() => {
      dispatch({ type: 'CLOSE_MODAL' })
    }, 3000)
  }
  return (
    <>
      <section className='ch-3 '>
        <h1>challenge-2</h1>
        {state.isModalOpen && (
          <section>
            <Modal
              toggleModal={toggleModal}
              modalContent={state.modalContent}
            />
          </section>
        )}
        <section className='user-list flex'>
          {state.users &&
            state.users.map((user, idx) => (
              <UserPreview removeUser={removeUser} user={user} key={idx} />
            ))}
        </section>

        <section className='actions-container'>
          <button onClick={addUser}>Add</button>
        </section>
      </section>
    </>
  )
}
