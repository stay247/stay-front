import { useBackgroundStore } from '../store/backgroundStore';
import { useAuthStore } from '../store/authStore';

/**
 * Custom hook that combines the use of background and authentication stores.
 * It returns the current background image URL and the login status.
 */
const useAppContext = () => {
  // Fetch the background image from the background store
  const { backgroundImage } = useBackgroundStore();

  // Fetch the login status from the auth store
  const { isLoggedIn } = useAuthStore();

  // Return both values for easy access in components
  return { backgroundImage, isLoggedIn };
};

export default useAppContext;
