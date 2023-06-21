// Сделаем рекурсию, чтобы айдишники не повторялись,
// так как айдишники идут от 1 до 9, тут опустим проверку
// на глубину рекурсии (хотя обычно надо бы сделать),
// но в данном случае проверка будет в тех функциях,
// где утилита используется

import includes from 'lodash/includes'

function generateRandomId(ids?: number[]): number | undefined {
  const randomId = Math.floor(Math.random() * (10 - 1)) + 1
  return includes(ids, randomId) ? generateRandomId(ids) : randomId
}

export { generateRandomId }
