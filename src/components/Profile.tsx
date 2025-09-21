import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store';

export default function Profile() {
  const result = useSelector((state: RootState) => state.profile);
  return (
    <div>
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {result.id}</p>
      <p>Họ và tên: {result.name}</p>
      <p>Giới tính: {result.gender}</p>
      <p>Ngày sinh: {result.dateofbirth}</p>
      <p>Địa chỉ: {result.address}</p>
    </div>
    </div>
  )
}
