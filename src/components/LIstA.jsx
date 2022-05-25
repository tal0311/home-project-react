import React from 'react'
import { PreviewA } from './PreviewA'

const LIstA = ({ userList }) => {
  const users = [
    {
      id: new Date().getTime().toString(),
      username: ' baba',
    },
    {
      id: new Date().getTime().toString() + 2,
      username: ' baba2',
    },
    {
      id: new Date().getTime().toString() + 3,
      username: ' baba3',
      userList: [
        {
          id: new Date().getTime().toString() + 6,
          username: ' dada',
        },
        {
          id: new Date().getTime().toString() + 4,
          username: ' dada2',
        },
      ],
    },
  ]

  if (userList) {
    return (
      <>
        {userList.map((user) => (
          <PreviewA user={user} />
        ))}
      </>
    )
  }

  return (
    <>
      {users.map((user) => (
        <PreviewA user={user} />
      ))}
    </>
  )
}

export default LIstA
