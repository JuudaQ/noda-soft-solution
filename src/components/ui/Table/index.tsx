// Сделаем таблицу чуть более универсальной
// и возможной для использования для других
// данных, а не только для юзеров

import React from 'react'

import map from 'lodash/map'

import { DOUBLE_DASH } from '../../../constants/strings'

interface ITableProps {
  headers: string[],
  keys: string[],
  rows?: any[],
}

function Table({ headers, keys, rows }: ITableProps): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          {map(headers, (header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {map(rows, row => (
          <tr key={row?.id}>{map(keys, (key: string) => (
            <td key={key}>{row?.[key] || DOUBLE_DASH}</td>
          ))}</tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
