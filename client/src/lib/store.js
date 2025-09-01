import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'

export const useAuth = create((set) => ({
  token: null,
  user: null,
  login: (token) => {
    const user = jwtDecode(token)
    set({ token, user })
    localStorage.setItem('token', token)
  },
  logout: () => {
    set({ token: null, user: null })
    localStorage.removeItem('token')
  },
  init: () => {
    const t = localStorage.getItem('token')
    if (t) {
      try { set({ token: t, user: jwtDecode(t) }) } catch {}
    }
  }
}))

export const useCart = create((set, get) => ({
  items: [],
  add: (p) => {
    const items = [...get().items]
    const idx = items.findIndex(i => i._id === p._id)
    if (idx >= 0) items[idx].qty += 1
    else items.push({ ...p, qty: 1 })
    set({ items })
  },
  remove: (id) => set({ items: get().items.filter(i => i._id !== id) }),
  removeItem: (id) => set({ items: get().items.filter(i => i._id !== id) }),
  updateQuantity: (id, qty) => {
    const items = [...get().items]
    const idx = items.findIndex(i => i._id === id)
    if (idx >= 0) {
      items[idx].qty = qty
      set({ items })
    }
  },
  clear: () => set({ items: [] })
}))
