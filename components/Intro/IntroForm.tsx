'use client'
import React, { FC } from 'react'
import Name from '@/assets/images/icons/name.svg'
import Phone from '@/assets/images/icons/phone.svg'
import Email from '@/assets/images/icons/mail.svg'
import { useModalStore } from '@/helpers/zustand'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { IntroFormSchema, IForm } from '@/helpers/zod'

const IntroForm: FC = () => {

   const { openSuccessModal } = useModalStore()
   const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>({ mode: 'onChange', resolver: zodResolver(IntroFormSchema) })

   const onSubmit = (data: IForm) => {
      console.log(data)
      openSuccessModal()
      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="form__content">
         <label className="form__label">
            <Name className="form__icon" />
            <input
               className="form__input name__input"
               placeholder="Your name"
               {...register('name')}
            />
            {errors.name && <span className="form__error">{errors.name.message}</span>}
         </label>
         <label className="form__label">
            <Phone className="form__icon" />
            <input
               className="form__input phone__input"
               placeholder="Your phone"
               {...register('phone')}
            />
            {errors.phone && <span className="form__error">{errors.phone.message}</span>}
         </label>
         <label className="form__label">
            <Email className="form__icon" />
            <input
               className="form__input mail__input"
               placeholder="Your e-mail"
               {...register('email')}
            />
            {errors.email && <span className="form__error">{errors.email.message}</span>}
         </label>
         <Button className="form__button" type="submit">Call me back</Button>
      </form>
   )
}

export default IntroForm