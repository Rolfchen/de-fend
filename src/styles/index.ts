export * from './utils';
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  /**
   * Use MaterialUI Theme as the default emotion theme
   */
  export interface Theme extends MuiTheme {}
}
