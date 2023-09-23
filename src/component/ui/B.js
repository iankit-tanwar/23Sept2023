'use client'
import React from 'react'
import C from './C'

export default function B(props) {
    console.log(props)
  return (
    <>
    <div>B Comopnent {props.msg}</div>
    <C msg= {props.msg}></C>
    </>
  )
}
