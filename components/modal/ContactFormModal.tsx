'use client'
import React, { FC, useEffect, useRef } from 'react'
import Name from '@/assets/images/icons/name-black.svg'
import Phone from '@/assets/images/icons/phone-black.svg'
import Email from '@/assets/images/icons/mail-black.svg'
import Close from '@/assets/images/icons/close.svg'
import Success from '@/assets/images/icons/thanks.svg'
import { useModalStore } from '@/helpers/zustand'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import { IForm } from '../Intro/IntroForm'
import { AnimatePresence, motion } from 'motion/react'

const ContactFormModal: FC = () => {

   //================ FORM FUNCTIONS ================
   const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>({ mode: 'onBlur' })

   const onSubmit = (data: IForm) => {
      console.log(data)
      close()
      openSuccessModal()
      reset()
   }

   //================ MODAL FUNCTIONS ================
   const { openSuccessModal, close, isModalOpen, closeSuccessModal, isSuccessModalOpen } = useModalStore()

   const contactFormRef = useRef<HTMLDivElement | null>(null)
   const successModalRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      const headerInner = document.querySelector('.header__inner')
      const isTablet = window.matchMedia('(max-width: 780px)').matches

      if ((isModalOpen || isSuccessModalOpen) && !isTablet) {

         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = '16px'
         if (headerInner instanceof HTMLElement) headerInner.style.paddingRight = '8px'
      } else if ((isModalOpen || isSuccessModalOpen) && isTablet) {
         document.body.style.overflow = 'hidden'
      }
      else {
         const timeout = setTimeout(() => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
            if (headerInner instanceof HTMLElement) headerInner.style.paddingRight = ''
         }, 300)

         return () => {
            clearTimeout(timeout)
         }
      }
   }, [isModalOpen, isSuccessModalOpen])

   const handleCloseModal = () => {
      close()
      closeSuccessModal()
      reset()
   }

   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         const contactFormEl = contactFormRef.current
         const successModalEl = successModalRef.current
         const target = event.target as Node

         if (!isModalOpen && !isSuccessModalOpen) return

         if (isModalOpen && contactFormEl && !contactFormEl.contains(target)) {
            close()
            reset()
         }

         if (isSuccessModalOpen && successModalEl && !successModalEl.contains(target)) {
            closeSuccessModal()
            reset()
         }
      }

      document.addEventListener('mousedown', handleOutsideClick)
      return () => {
         document.removeEventListener('mousedown', handleOutsideClick)
      }
   }, [isModalOpen, isSuccessModalOpen])

   return (
      <AnimatePresence mode='wait'>
         {(isModalOpen || isSuccessModalOpen) &&
            <motion.div
               className='modal__background'
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               {isModalOpen &&
                  <motion.div
                     ref={contactFormRef}
                     className='modal__content' initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <Close className='modal__close' onClick={handleCloseModal} />
                     <h2 className='modal__title'>Need to deliver your cargo? We can help!</h2>
                     <p className='modal__text mb-[30px]'>Fill a little form and we will call you back!</p>
                     <form onSubmit={handleSubmit(onSubmit)} className="modal__content-form">
                        <label className="modal__label">
                           <Name className="modal__icon" />
                           <input
                              className="modal__input name__input"
                              placeholder="Your name"
                              {...register('name', { required: 'Name is required', maxLength: { value: 20, message: 'Max 20 symbols' }, minLength: { value: 2, message: 'Min 2 symbols' }, pattern: { value: /^(?!.* {2})[a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+(?: [a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+)*$/, message: 'Only letters' }, })}
                           />
                           {errors.name && <span className="modal__error">{errors.name.message}</span>}
                        </label>
                        <label className="modal__label">
                           <Phone className="modal__icon" />
                           <input
                              className="modal__input phone__input"
                              placeholder="Your phone"
                              {...register('phone', { required: 'Phone is required', maxLength: { value: 20, message: 'Max 20 symbols' }, minLength: { value: 8, message: 'Min 8 symbols' }, pattern: { value: /^[0-9]+$/, message: 'Only numbers' }, })}
                           />
                           {errors.phone && <span className="modal__error">{errors.phone.message}</span>}
                        </label>
                        <label className="modal__label">
                           <Email className="modal__icon" />
                           <input
                              className="modal__input mail__input"
                              placeholder="Your e-mail"
                              {...register('email', { required: 'Email is required', maxLength: { value: 30, message: 'Max 30 symbols' }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }, })}
                           />
                           {errors.email && <span className="modal__error">{errors.email.message}</span>}
                        </label>
                        <Button className="modal__button" type="submit">Call me back</Button>
                     </form>
                     <div className="modal__divider" />
                     <div className='flex flex-col items-center gap-2'>
                        <p className='modal__contacts-title'>Our contacts</p>
                        <div className='flex flex-col'>
                           <p className="modal__text">New York, Street, ZIP code</p>
                           <a type='tel' href="tel:+9948373123" className="modal__text">Phone: +9948373123</a>
                           <a href="mailto:hello@centerlogistic.com" className="modal__text">E-mail: hello@centerlogistic.com</a>
                        </div>
                     </div>
                  </motion.div>}

               {isSuccessModalOpen &&
                  <motion.div animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     ref={successModalRef}
                     className='modal__content'
                  >
                     <Close className='modal__close' onClick={handleCloseModal} />
                     <div className='flex justify-center mb-3'><Success className='modal__success' /></div>
                     <h2 className='modal__title'>Thanks for your request</h2>
                     <p className='modal__text'>We call you back as soon as possible!</p>
                     <div className="modal__divider" />
                     <div className='flex flex-col items-center gap-2'>
                        <p className='modal__contacts-title'>Our contacts</p>
                        <div className='flex flex-col'>
                           <p className="modal__text">New York, Street, ZIP code</p>
                           <a type='tel' href="tel:+9948373123" className="modal__text">Phone: +9948373123</a>
                           <a href="mailto:hello@centerlogistic.com" className="modal__text">E-mail: hello@centerlogistic.com</a>
                        </div>
                     </div>
                  </motion.div>}
            </motion.div>}
      </AnimatePresence>
   )
}

export default ContactFormModal