import React, { FormEvent, useCallback, useState } from 'react';
import { AlertColor, Collapse, TextField } from '@mui/material';
import { UserFormButton, UserFormContainer } from './styled';
import {
  confirmPasswordReset,
  getAuth,
  verifyPasswordResetCode,
} from '@firebase/auth';
import { Alert } from '@/components';

export interface PasswordResetFormProps {
  className?: string;
  successMessage?: React.ReactNode;
  oobCode?: string; // Firebase OOB Code for reset
}

/**
 * This is the actual form that changes a firebase user's password
 * from a valid password reset code
 * @param props
 * @param props.oobCode - firebase oobcode for resetting the password
 * @param props.className - class name to add
 * @param props.successMessage - Success message to show. This is a React Node, so you may add additional links
 */
const PasswordResetForm = ({
  oobCode,
  className,
  successMessage,
}: PasswordResetFormProps) => {
  // TODO: confirm password validation
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<React.ReactNode>('');
  const [formStatus, setFormStatus] = useState<AlertColor>('info');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const defaultSuccessMessage = `Success! your password has been reset. Please go back to the home page`;

  const handlePasswordReset = useCallback(async () => {
    if (!oobCode) {
      setFormStatus('error');
      setFormMessage('Password reset code is required');
      return;
    }
    if (Array.isArray(oobCode)) {
      setFormStatus('error');
      setFormMessage('Multiple reset code found. ');
      return;
    }
    try {
      const auth = getAuth();
      await verifyPasswordResetCode(auth, oobCode);
      await confirmPasswordReset(auth, oobCode, newPassword);
      setFormStatus('success');
      setFormMessage(successMessage || defaultSuccessMessage);
    } catch (error) {
      setFormStatus('error');
      setFormMessage('An error has occurred');
    }
  }, [oobCode, newPassword]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');
    if (confirmPassword !== newPassword) {
      setFormStatus('error');
      setFormMessage('Passwords do not match!');
    }
    await handlePasswordReset();
    setIsLoading(false);
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      <h1>Reset your password</h1>
      <TextField
        id="reset-password"
        variant="outlined"
        label="New password"
        type="password"
        placeholder="*************"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <TextField
        id="reset-confirm-password"
        variant="outlined"
        label="Confirm new password"
        type="password"
        placeholder="*************"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Collapse in={!!formMessage}>
        <Alert severity={formStatus}>{formMessage}</Alert>
      </Collapse>
      <UserFormButton variant="contained" type="submit" isLoading={isLoading}>
        Reset my password
      </UserFormButton>
    </UserFormContainer>
  );
};

export default PasswordResetForm;
