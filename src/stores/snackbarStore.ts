import {create} from 'zustand';

interface SnackbarState {
    isOpen: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
    openSnackbar: (message: string, severity: 'success' | 'error' | 'info') => void;
    closeSnackbar: () => void;
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
    isOpen: false,
    message: '',
    severity: 'success',
    openSnackbar: (message, severity) => set({isOpen: true, message, severity}),
    closeSnackbar: () => set({isOpen: false}),
}));
