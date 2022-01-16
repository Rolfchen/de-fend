import styled from '@emotion/styled';
import { BaseLogoProps, LogoStyleProps } from '../types';

const LogoSvg = styled.svg`
  width: ${({ cssWidth }: LogoStyleProps) => cssWidth};
  height: ${({ cssHeight }: LogoStyleProps) => cssHeight};
`;

const DataEstateShield = ({
  variant,
  className,
  title = 'Data Estate',
  width = '103',
  height = '91',
}: BaseLogoProps) => {
  const fillColor = variant === 'color' ? '#0061A1' : 'white';

  return (
    <LogoSvg
      className={className}
      viewBox="0 0 103 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.541748 5.81658C0.541748 5.81658 26.0001 0.666748 51.4584 0.666748C76.9167 0.666748 102.375 5.81658 102.375 5.81658V24.8052C102.361 25.4582 102.358 26.2196 102.355 27.0761C102.326 36.2496 102.263 56.3404 86.8835 71.1359C74.6236 82.9306 57.891 90.0417 51.4584 90.0417C45.0258 90.0417 28.2932 82.9306 16.0334 71.1359C0.651897 56.3384 0.589626 36.245 0.561201 27.0727C0.558551 26.2175 0.556195 25.4573 0.541748 24.8052V5.81658ZM72.9629 64.0572L89.3751 55.5077V15.365C89.3751 15.365 69.661 12.5834 51.9977 12.5834C34.3343 12.5834 14.0834 15.365 14.0834 15.365V51.3054L30.4965 64.0532V53.5649L26.2955 50.727V28.189H45.6274V61.3213L39.8971 57.9353V68.4266L51.732 75.4167L63.565 68.4256V57.9353L57.8367 61.3213V28.189H77.1611V50.729L72.9629 53.5669V64.0572Z"
        fill={fillColor}
      />
    </LogoSvg>
  );
};

export default DataEstateShield;
