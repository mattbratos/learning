import React from 'react'

type CardProps = {
  title: string
  content: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, content, children }) => {
  return (
    <div className='max-w-xl rounded overflow-hidden shadow-lg p-4 bg-black border-2'>
      <div className='font-bold text-2xl mb-2'>{title}</div>
      <p className='text-white '>{content}</p>
      {children}
    </div>
  )
}

export default Card
