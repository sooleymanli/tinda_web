import React from 'react'
import { useParams } from 'react-router-dom'

export default function PreviewDoc() {
    const {id} = useParams()
  return (
    <div>PreviewDoc</div>
  )
}
