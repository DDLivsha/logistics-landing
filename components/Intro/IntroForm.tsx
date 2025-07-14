'use client'
import React, { FC } from 'react'
import Name from '@/assets/images/icons/name.svg'
import Phone from '@/assets/images/icons/phone.svg'
import Email from '@/assets/images/icons/mail.svg'
import { useModalStore } from '@/helpers/zustand'
import { useForm } from 'react-hook-form'

export interface IForm {
   name: string,
   phone: string,
   email: string
}

const IntroForm: FC = () => {

   const { openSuccessModal } = useModalStore()
   const { register, handleSubmit, formState: { errors } } = useForm<IForm>({ mode: 'onBlur' })

   const onSubmit = (data: IForm) => {
      console.log(data)
      openSuccessModal()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="form__content">
         <label className="form__label">
            <Name className="form__icon" />
            <input
               className="form__input name__input"
               placeholder="Your name"
               {...register('name', { required: 'Name is required', maxLength: { value: 20, message: 'Max 20 symbols' }, minLength: { value: 2, message: 'Min 2 symbols' }, pattern: { value: /^[a-zA-Zа-яА-Я]+$/, message: 'Only letters' },})}
            />
            {errors.name && <span className="form__error">{errors.name.message}</span>}
         </label>
         <label className="form__label">
            <Phone className="form__icon" />
            <input
               className="form__input phone__input"
               placeholder="Your phone"
               {...register('phone', { required: 'Phone is required', maxLength: { value: 20, message: 'Max 20 symbols' }, minLength: { value: 8, message: 'Min 8 symbols' }, pattern: { value: /^[0-9]+$/, message: 'Only numbers' },})}
            />
            {errors.phone && <span className="form__error">{errors.phone.message}</span>}
         </label>
         <label className="form__label">
            <Email className="form__icon" />
            <input
               className="form__input mail__input"
               placeholder="Your e-mail"
               {...register('email', { required: 'Email is required', maxLength: { value: 30, message: 'Max 30 symbols' }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },})}
            />
            {errors.email && <span className="form__error">{errors.email.message}</span>}
         </label>
         <button
            className="form__button button"
            type="submit"
         >Call me back</button>
      </form>
   )
}

export default IntroForm