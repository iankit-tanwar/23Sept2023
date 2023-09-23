import React from 'react'
import F from './F'

export default function E(props) {
  return (
    <>
    <div>E component {props.msg}</div>
    <F msg= {props.msg}></F>
    </>
  )
}
