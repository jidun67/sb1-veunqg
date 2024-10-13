import React, { useState, useRef, useEffect } from 'react'
import { Eye, Save, FolderOpen } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatInterfaceProps {
  messages: Message[]
  onSendMessage: (message: string) => void
  onSaveChat: () => void
  availableChats: string[]
  onLoadChat: (chatName: string) => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  messages, 
  onSendMessage, 
  onSaveChat, 
  availableChats, 
  onLoadChat 
}) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input.trim())
      setInput('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-hermes-accent text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-gray-700 p-4 flex flex-col">
        <div className="flex mb-2 space-x-2">
          <button
            onClick={onSaveChat}
            className="bg-hermes-accent text-white rounded-lg px-4 py-2 hover:bg-opacity-90 transition-colors duration-200 flex items-center"
          >
            <Save size={20} className="mr-2" />
            Save Chat
          </button>
          <select 
            onChange={(e) => onLoadChat(e.target.value)}
            className="flex-grow bg-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hermes-accent"
          >
            <option value="">Load a previous chat</option>
            {availableChats.map((chat, index) => (
              <option key={index} value={chat}>{chat}</option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-gray-600 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hermes-accent"
          />
          <button
            type="submit"
            className="bg-hermes-accent text-white rounded-r-lg px-4 py-2 hover:bg-opacity-90 transition-colors duration-200"
          >
            <Eye size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatInterface