'use client'

import { createContext, useState, useContext, ReactNode } from 'react'

const AppointmentModalContext = createContext({
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
})

export const AppointmentModalProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <AppointmentModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </AppointmentModalContext.Provider>
  )
}

export const useAppointmentModal = () => {
  return useContext(AppointmentModalContext)
}
