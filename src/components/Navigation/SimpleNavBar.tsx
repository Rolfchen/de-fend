import styled from '@emotion/styled';

interface NavBarContainerStyleProps {
  height?: string;
}

const SimpleNavBarContainer = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  height: ${({ height }: NavBarContainerStyleProps) => height || `64px`};
`;

const LogoContainer = styled.div`
  height: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export interface SimpleNavBarProps {
  className?: string;
  logo?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  height?: string;
}

const SimpleNavBar = ({
  className,
  logo,
  title,
  children,
  height = '80px',
}: SimpleNavBarProps) => {
  return (
    <SimpleNavBarContainer height={height} className={className}>
      <LogoContainer>
        {logo}
        {title && <h3>{title}</h3>}
      </LogoContainer>
      <MenuContainer>{children}</MenuContainer>
    </SimpleNavBarContainer>
  );
};

export default SimpleNavBar;
