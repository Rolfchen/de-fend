/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useState, MouseEvent } from 'react';
import {
  getAuth,
  OAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  TextField,
  Collapse,
  AlertColor,
  CircularProgress,
} from '@mui/material';

import { FirebaseError } from '@firebase/util';
import { Alert } from '../../components';
import { Logger, MicrosoftAuthProvider } from '../../utils';
import { UserFormButton, UserFormContainer } from './styled';

export interface LoginFormProps {
  onSuccess?: () => void;
  forgotPasswordLink?: React.ReactNode;
}

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/**
 * A firebase login form.
 * @param props
 * @param props.onSuccess -> callback when login is successful
 * @param props.forgotPasswordLink -> Forgot password link to show. This should be a component.
 */

const LoginForm = ({ onSuccess, forgotPasswordLink }: LoginFormProps) => {
  // TODO: add setShowPassword icon
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<AlertColor>('success');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      if (userCredentials) {
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      setFormStatus('error');
      if (error instanceof FirebaseError) {
        Logger.error('Firebase Error encountered', {
          code: error.code,
          message: error.message,
        });
        setFormMessage(error.message);
      } else {
        setFormMessage('Unknown Error Encountered');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleMicrosoftLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    const auth = getAuth();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, MicrosoftAuthProvider);
      const credentials = OAuthProvider.credentialFromResult(result);
      setIsLoading(false);
      setFormMessage('Success!');
      setFormStatus('success');
      if (credentials && onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof FirebaseError) {
        setFormMessage(error.message);
      } else {
        setFormMessage('Unknown error has occured');
      }
      setFormStatus('error');
    }
  };

  return (
    <UserFormContainer onSubmit={handleSubmit} aria-label="User login">
      <h1>Personal Finance Manager</h1>
      <h3>Login with your username and password</h3>
      <TextField
        id="login-username"
        type="email"
        onChange={handleUsernameChange}
        variant="outlined"
        label="Username"
        placeholder="my.name@gmail.com"
      />
      <TextField
        id="login-password"
        onChange={handlePasswordChange}
        variant="outlined"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="*********"
      />

      <Collapse in={!!formMessage}>
        <Alert aria-label="login result" severity={formStatus}>
          {formMessage}
        </Alert>
      </Collapse>
      <ForgotPasswordContainer>{forgotPasswordLink}</ForgotPasswordContainer>
      <UserFormButton variant="contained" type="submit">
        {isLoading ? (
          <>
            <CircularProgress color="secondary" />
            <span>Logging in...</span>
          </>
        ) : (
          'Login'
        )}
      </UserFormButton>
      <UserFormButton onClick={handleMicrosoftLogin}>
        Login with Microsoft
      </UserFormButton>
    </UserFormContainer>
  );
};

export default LoginForm;
