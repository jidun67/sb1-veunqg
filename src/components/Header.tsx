import React from 'react'
import { Eye } from 'lucide-react'

interface HeaderProps {
  userName: string
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-hermes-dark py-4 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Eye size={32} className="text-hermes-accent mr-2" />
        <h1 className="text-2xl font-bold">Hermes</h1>
      </div>
      <div className="text-hermes-accent">
        Welcome, {userName}
      </div>
    </header>
  )
}

export default Header