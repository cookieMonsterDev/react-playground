import React from 'react'
import './skeleton.css'


interface SkeletonProps extends React.DelHTMLAttributes<HTMLDivElement> {}

const Skeleton: React.FC<SkeletonProps> = ({ ...props }) => {
  return (
    <div id="skeleton" {...props}/>
  )
}

export default Skeleton