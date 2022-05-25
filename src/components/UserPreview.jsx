import React from 'react'

export const UserPreview = ({ user, removeUser }) => {
  const { username, favorites } = user
  console.log(user)

  return (
    <>
      <section className='user-preview flex'>
        <div className='user flex'>
          <h4>{username}</h4>
          <button onClick={() => removeUser(user.id)}>Delete</button>
        </div>
      </section>
    </>
  )
}
