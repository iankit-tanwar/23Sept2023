import React from 'react'
import E from './E'

export default function D(props) {
  return (
    <>
    <div>D component {props.msg}</div>
    <E msg={props.msg}/>
    </>
  )
}
