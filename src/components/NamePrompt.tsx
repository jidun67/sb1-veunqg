import React, { useState } from 'react'

interface NamePromptProps {
  onSubmit: (name: string) => void
}

const NamePrompt: React.FC<NamePromptProps> = ({ onSubmit }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome, Seeker of Wisdom</h2>
      <p className="mb-6 text-center">Before we embark on this mystical journey, please share your name or chosen alias with Hermes.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name or alias"
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hermes-accent"
        />
        <button
          type="submit"
          className="w-full bg-hermes-accent text-white rounded-lg px-4 py-2 hover:bg-opacity-90 transition-colors duration-200"
        >
          Begin Your Journey
        </button>
      </form>
    </div>
  )
}

export default NamePrompt