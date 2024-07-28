'use client'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
const Loading = () => {
  return (
    <div>
        <h1>loading..</h1>
        <Skeleton
         count={10}
         duration={5}

        />
    </div>
  )
}

export default Loading