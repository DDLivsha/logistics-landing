'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import Button from '@/components/common/Button'

const PrivacyButtonWrapper: FC = () => {
   return (
      <Link className='mt-[50px]' href="/">
         <Button className='mt-[50px]'>Back to home</Button>
      </Link>
   )
}

export default PrivacyButtonWrapper