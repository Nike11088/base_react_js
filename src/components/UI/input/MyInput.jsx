import React from 'react'
import clases from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={clases.myInput} {...props} />
})

export default MyInput
