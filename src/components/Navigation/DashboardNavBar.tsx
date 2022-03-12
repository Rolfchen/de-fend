import styled from '@emotion/styled';
import { Avatar, Menu, alpha } from '@mui/material';
import { useState } from 'react';
import { useUserState } from '../../context/UserContext';

interface NavBarContainerStyleProps {
  height?: string;
}

const DashboardNavBarContainer = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  min-height: ${({ height }: NavBarContainerStyleProps) => height || `64px`};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0;
  }
`;

const MenuContainer = styled.div``;

const ProfileMenuContainer = styled.div``;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  .profile-avatar {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.action.hover};
    border-color: ${({ theme }) => theme.palette.primary.light};
    .profile-avatar {
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
  const { user } = useUserState();

  const handleProfileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(user);

  return (
    <DashboardNavBarContainer height={height} className={className}>
      <LogoContainer>
        {logo}
        {title && <h3>{title}</h3>}
      </LogoContainer>
      <MenuContainer>{children}</MenuContainer>
      <ProfileMenuContainer>
        <ProfileButton onClick={handleProfileClick}>
          <div>{user?.displayName || 'Anonymous'}</div>
          <Avatar
            className="profile-avatar"
            src={user?.photoURL || undefined}
            aria-controls="profile-menu"
          >
            {user?.displayName?.charAt(0)}
          </Avatar>
        </ProfileButton>
        <Menu
          id="profile-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          MenuListProps={{
            'aria-label': 'Profile Menu',
          }}
        >
          {profileMenuItems}
        </Menu>
      </ProfileMenuContainer>
    </DashboardNavBarContainer>
  );
};

export default DashboardNavBar;
