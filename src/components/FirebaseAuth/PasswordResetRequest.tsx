import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import {
  TextField,
  Typography,
  CircularProgress,
  Collapse,
  AlertColor,
} from '@mui/material';
import { FirebaseError } from '@firebase/util';
import { Alert } from '../../components';
import { UserFormButton, UserFormContainer } from './styled';

export interface PasswordResetRequestProps {
  className?: string;
  loginLink?: React.ReactNode;
}
/**
 * This component takes in a user email to REQUEST
 * for password change. This one doesn't actually change the password
 * @param props
 * @param props.className - for styling
 * @param props.loginLink - React node for an optional login link
 * @returns
 */
const PasswordResetRequest = ({
  className,
  loginLink,
}: PasswordResetRequestProps) => {
  // TODO: omit certain errors to prevent malicious retries
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<AlertColor>('info');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormMessage('');
    setIsLoading(true);
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setFormMessage('Your password reset email has been sent');
      setFormStatus('success');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFormMessage(error.message);
        setFormStatus('error');
      } else {
        setFormMessage('An error has occurred');
        setFormStatus('error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      <h1>Send password reset email</h1>
      <Typography variant="subtitle1">
        Enter your email (username) below to receive password reset email
      </Typography>
      <TextField
        id="reset-request-username"
        variant="outlined"
        label="Username"
        type="email"
        placeholder="my.name@gmail.com"
        value={email}
        onChange={handleChange}
      />
      <Collapse in={!!formMessage}>
        <Alert aria-label="login result" severity={formStatus}>
          {formMessage}
        </Alert>
      </Collapse>
      {formStatus === 'success' && loginLink}
      <UserFormButton variant="contained" type="submit">
        {isLoading ? (
          <>
            <CircularProgress color="secondary" />
          </>
        ) : (
          'Send password reset email'
        )}
      </UserFormButton>
    </UserFormContainer>
  );
};

export default PasswordResetRequest;
