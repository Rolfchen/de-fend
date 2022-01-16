import { Dialog } from '@mui/material';
import LoginForm from '../FirebaseAuth/LoginForm';
import { useModalState, useModalStateUpdater } from '../../context/AppModal';

interface FirebaseLoginModalProps {
  onClose?: () => void;
}

/**
 * A firebase login modal that will load the firebase login form.
 * This modal uses the app context to load the modal
 * @param param0
 * @returns
 */
const FirebaseLoginModal = ({ onClose }: FirebaseLoginModalProps) => {
  const { isOpen = false } = useModalState('loginModal');
  const { toggleModal } = useModalStateUpdater();

  const handleSuccess = () => {
    toggleModal('loginModal', false);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <LoginForm onSuccess={handleSuccess} />
    </Dialog>
  );
};

export default FirebaseLoginModal;
