import styled from '@emotion/styled';
import { Avatar, Menu } from '@mui/material';
import { useState } from 'react';
import { useUserState } from '../../context/UserContext';
import { useRouter } from 'next/router';

interface NavBarContainerStyleProps {
  height?: string;
}

const DashboardNavBarContainer = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  height: ${({ height }: NavBarContainerStyleProps) => height || `64px`};
`;

const LogoContainer = styled.div``;

const MenuContainer = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & button {
    border: none;
    background-color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

export interface DashboardNavBarProps {
  className?: string;
  logo?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  height?: string;
  profileMenuItems?: React.ReactNode;
}

/**
 * The main menu bar appearing at the TOP of the page.
 * @param props
 * @param props.className - class name to style
 * @param props.logo - Logo to be added to the nav bar
 * @param props.title - Site title as string to display
 * @param props.height - height in pixels
 * @param props.profileMenuItems - the menu to show when user clicks on the profile icon
 *
 */
const DashboardNavBar = ({
  logo,
  title,
  children,
  className,
  height,
  profileMenuItems,
}: DashboardNavBarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { user } = useUserState();

  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DashboardNavBarContainer height={height} className={className}>
      <LogoContainer>
        {logo}
        {title && <h3>{title}</h3>}
      </LogoContainer>
      <MenuContainer>{children}</MenuContainer>
      <ProfileContainer>
        <Avatar
          component="button"
          src={user?.photoURL || undefined}
          onClick={handleProfileClick}
          aria-controls="profile-menu"
        >
          {user?.displayName?.charAt(0)}
        </Avatar>
        <Menu
          id="profile-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-label': 'Profile Menu',
          }}
        >
          {profileMenuItems}
        </Menu>
      </ProfileContainer>
    </DashboardNavBarContainer>
  );
};

export default DashboardNavBar;
