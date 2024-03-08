import create from 'zustand';
import backgroundImage from '../assets/images/beautiful-photo-sea-waves.jpg';

interface BackgroundState {
  backgroundImage: string;
  setBackgroundImage: (image: string) => void;
}

export const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: backgroundImage,
  setBackgroundImage: (image) => set(() => ({ backgroundImage: image })),
}));