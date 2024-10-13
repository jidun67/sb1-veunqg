const CHAT_STORAGE_PREFIX = 'hermes_chat_'

export const saveChat = (chatName: string, messages: any[]) => {
  const chatData = JSON.stringify(messages)
  localStorage.setItem(`${CHAT_STORAGE_PREFIX}${chatName}`, chatData)
}

export const loadChat = (chatName: string): any[] | null => {
  const chatData = localStorage.getItem(`${CHAT_STORAGE_PREFIX}${chatName}`)
  return chatData ? JSON.parse(chatData) : null
}

export const listChats = (): string[] => {
  const chats: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith(CHAT_STORAGE_PREFIX)) {
      chats.push(key.slice(CHAT_STORAGE_PREFIX.length))
    }
  }
  return chats
}