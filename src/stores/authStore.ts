import {create} from 'zustand';
import {getCookie} from '../hooks/appUtil';

interface AuthState {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!getCookie('accessToken'),
  login: () => set({isLoggedIn: true}),
  logout: () => set({isLoggedIn: false}),
}))
