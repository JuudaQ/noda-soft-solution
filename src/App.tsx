import React from 'react'

import { UsersInfo } from './components/blocks'

import { HEADER } from './constants/strings'

function App(): JSX.Element {
  return (
    <div>
      <header>{HEADER}</header>
      <UsersInfo />
    </div>
  )
}

export default App
