// Давайте сделаем интереснее, тобы генерился не один
// рандомный юзер, а каждый раз новый и таблица наполнялась
// можно было бы для setUsers добавить поверку на уникальность,
// но тогда у нас будут клики, которые сработают в холостую,
// а хотелось бы, чтобы отрабатывал каждый,
// так как айдишники генерируется в диапазоне от 1 до 9,
// добавим проверку на максимальное число записей

import { useCallback, useMemo, useState } from "react"

import { generateRandomId } from "../utils"

import { USERS_URL } from "../config"

import { USERS_MAX_SIZE } from "../constants/tables"

import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'

type Company = {
  bs: string,
  catchPhrase: string,
  name: string,
}

type User = {
  id: number,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  company: Company,
  address: any,
}

function useUsersData() {
  const [users, setUsers] = useState<Record<number, User>[]>([])

  const userIds = useMemo(
    () => isEmpty(users) 
    ? [] 
    : map(users, 'id'), 
  [users])

  const getRandomUser = useCallback(async() => {
    if (size(userIds) === USERS_MAX_SIZE) return

    const id = generateRandomId(userIds)

    try {
      const response = await fetch(`${USERS_URL}/${id}`)
      const user = await response.json()
      setUsers([...users, user])
    } catch (e: any) {
      alert(e.message)
    }
  }, [userIds, users])

  const clearUsersList = useCallback(() => {
    if (isEmpty(userIds)) return

    setUsers([])
  }, [userIds])

  return { clearUsersList, getRandomUser, users }
}

export default useUsersData
