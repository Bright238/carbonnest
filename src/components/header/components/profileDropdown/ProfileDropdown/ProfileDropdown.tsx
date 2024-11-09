import React from 'react';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src='https://media.licdn.com/dms/image/v2/D4D35AQHIcurwOOq1JA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727110590756?e=1731747600&v=beta&t=b5KmlYmY-A_iKGqBnmgzDGH7kSRXcObhQlFD6AqjskI' alt="User" size={40} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <span>Bright<br /> Mafungautsi</span>
            {/* <span>{`${user.first_name} ${user.last_name[0]}`}</span> */}
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  ) : null;
};
