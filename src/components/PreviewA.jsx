import React from 'react'
import LIstA from './LIstA'

export const PreviewA = ({ user }) => {
  const { username, userList } = user

  return (
    <>
      <section className={userList?'itemOfUser': ''}>
        <h4>{username}</h4>

        {userList && <LIstA userList={userList} />}
      </section>
    </>
  )
}
