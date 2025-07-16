'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import Button from './Button'

interface Props {
   children: React.ReactNode,
   href: string
   className?: string
}

const ButtonWrapper: FC<Props> = ({ href, children, className }) => {
   return (
      <Link href={href}>
         <Button className={className}>{children}</Button>
      </Link>
   )
}

export default ButtonWrapper