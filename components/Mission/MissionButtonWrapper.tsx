'use client'
import React, { FC } from 'react'
import Button from '../common/Button'
import { useModalStore } from '@/helpers/zustand'

const MissionButtonWrapper: FC = () => {

   const { open } = useModalStore()

   return (
      <div className='mission__button-wrapper'>
         <Button onClick={open} className="mission__button button">Become a client</Button>
      </div>
   )
}

export default MissionButtonWrapper