// Собираем всек воединио для отображения

import React, { MouseEvent, useCallback } from 'react'

import { useUsersData, useThrottle } from '../../../hooks'

import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'

import { Button, Table } from '../../ui'

import { USERS_MAX_SIZE, USER_TABLE } from '../../../constants/tables'

import { BUTTONS_NAMES } from '../../../constants/strings'

function UsersInfo(): JSX.Element {
  const { users, getRandomUser, clearUsersList } = useUsersData()

  const { throttled: throttledUsers, loading } = useThrottle(users, 1000)

  const handleGetButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      getRandomUser()
  }, [getRandomUser])

  const handleClearButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      clearUsersList()
  }, [clearUsersList])

  const MemoizedTable = React.memo(Table)

  return (
    <>
      <MemoizedTable
        headers={USER_TABLE.headers}
        keys={USER_TABLE.keys}
        rows={throttledUsers}
      />
      <Button
        disabled={
          size(users) === USERS_MAX_SIZE ||
          loading
        }
        title={BUTTONS_NAMES.GET_USER} 
        type="button" 
        onClick={handleGetButtonClick} 
      />
      <Button
        disabled={
          isEmpty(users) || 
          loading
        }
        title={BUTTONS_NAMES.CLEAR}
        type="button"
        onClick={handleClearButtonClick}
      />
    </>
  )
}

export default UsersInfo
