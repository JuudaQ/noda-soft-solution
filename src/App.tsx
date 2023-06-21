// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.
// По возможности пришлите Ваш вариант в https://codesandbox.io

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
