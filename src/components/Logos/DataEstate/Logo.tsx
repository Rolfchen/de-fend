import styled from '@emotion/styled';
import {
  DataEstateTextWithTextVertical,
  DataEstateWithTextHorizontal,
} from '.';
import { LogoWithTextProps } from '../types';
import DataEstateShield from './DataEstateShield';

const LogoContainer = styled.div`
  display: flex;
  width: ${({ width }: LogoWithTextProps) => width};
  height: ${({ height }: LogoWithTextProps) => height};
  align-items: center;
`;

const Logo = ({
  orientation,
  withText,
  variant = 'color',
  width = '100%',
  height = 'auto',
}: LogoWithTextProps) => {
  return (
    <LogoContainer
      width={width}
      withText={withText}
      height={height}
      orientation={orientation}
    >
      {!withText && (
        <DataEstateShield width={width} height={height} variant={variant} />
      )}
      {withText && orientation === 'horizontal' && (
        <DataEstateWithTextHorizontal
          width={width}
          height={height}
          variant={variant}
        />
      )}
      {withText && orientation === 'vertical' && (
        <DataEstateTextWithTextVertical
          width={width}
          height={height}
          variant={variant}
        />
      )}
    </LogoContainer>
  );
};

export default Logo;
