import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserModel } from '@app/domain/UserModel';
import * as S from './ProfileInfo.styles';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

interface ProfileInfoProps {
  profileData: UserModel | null;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileData }) => {
  const [fullness] = useState(86);

  const { t } = useTranslation();

  return profileData ? (
    <S.Wrapper>
      <S.ImgWrapper>
        <BaseAvatar
          src="https://media.licdn.com/dms/image/v2/D4D35AQHIcurwOOq1JA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727110590756?e=1731747600&v=beta&t=b5KmlYmY-A_iKGqBnmgzDGH7kSRXcObhQlFD6AqjskI"
          alt="Profile"
        />
      </S.ImgWrapper>
      <S.Title>Bright Kapamulomo Mafungautsi</S.Title>
      {/* <S.Title>{`${profileData?.first_name} ${profileData?.last_name}`}</S.Title> */}
      <S.Subtitle>{profileData?.userName}</S.Subtitle>
      <BaseForm.Title>{t('Carbon Sink Verifier - Pro')}</BaseForm.Title>
      <S.FullnessWrapper>
        <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>
      </S.FullnessWrapper>
      <S.Text>{t('profile.fullness')}</S.Text>
    </S.Wrapper>
  ) : null;
};
