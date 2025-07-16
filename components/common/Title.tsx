import cn from 'classnames'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
   blueText: string
   blackText: string
}
const Title: FC<Props> = ({ className, blackText, blueText, ...props }) => {
   return (
      <h2 {...props} className={cn("title", className)}><span>{blueText}</span> {blackText}</h2>
   )
}

export default Title