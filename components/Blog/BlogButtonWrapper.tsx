'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../common/Button'


const BlogButtonWrapper: FC = () => {
   return (
      <Link href="/news">
         <Button>Visit blog</Button>
      </Link>
   )
}

export default BlogButtonWrapper