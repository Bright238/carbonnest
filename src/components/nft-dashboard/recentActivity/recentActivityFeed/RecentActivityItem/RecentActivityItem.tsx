import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { Dates } from '@app/constants/Dates';
import { Activity } from '@app/api/activity.api';
import * as S from './RecentActivityItem.styles';

export const RecentActivityItem: React.FC<Activity> = ({ image, title, date, status, owner }) => {
  const { t } = useTranslation();

  const currentActivity = useMemo(() => activityStatuses.find((dbStatus) => dbStatus.name === status), [status]);

  return (
    <S.ActivityCard>
      <S.Wrapper>
        <S.ImgWrapper>
          <img
            src="https://media.istockphoto.com/id/2148245203/photo/african-women-plucking-tea-leaves-on-plantation-east-africa.jpg?s=2048x2048&w=is&k=20&c=MT3fwdjSbco2hPYVrDlKVsP0eq4Qtw0bPcmz8mJDPns="
            alt={title}
            width={84}
            height={84}
          />
        </S.ImgWrapper>

        <S.InfoWrapper>
          <S.InfoHeaderWrapper>
            <S.TitleWrapper>
              <S.Title level={5}>{title}</S.Title>

              <S.IconWrapper>{currentActivity?.icon}</S.IconWrapper>
            </S.TitleWrapper>

            <S.Text>
              {t(currentActivity?.title || '')} {t('nft.by')} {owner}
            </S.Text>
          </S.InfoHeaderWrapper>

          <S.InfoBottomWrapper>
            <S.DateText>{Dates.getDate(date).format('lll')}</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.ActivityCard>
  );
};
