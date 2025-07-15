import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cn from 'classnames'
import { motion } from 'motion/react'

interface Props extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'ref'> {
   children: React.ReactNode,
   className?: string
}

const Button: FC<Props> = ({ children, className, ...props }) => {
   return (
      <motion.button
         {...props}
         className={cn('button', className)}
         initial={{ background: 'linear-gradient(90deg, #ff903e 0%, #ff2c2c 100%)' }}
         whileHover={{ background: 'linear-gradient(0deg, #ff903e 0%, #ff2c2c 100%)', scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
         {children}
      </motion.button>
   )
}

export default Button