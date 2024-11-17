import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { TrendingActivity } from '@app/api/activity.api';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import * as S from './TrendingCollection.styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const TrendingCollection: React.FC<TrendingActivity> = ({ title, owner, usd_value, image, avatar }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewProjectClick = () => {
    navigate('/apps/feed'); // Navigate to the feed route
  };

  return (
    <S.Card padding={0} $img={image}>
      <S.CollectionImage src={image} alt="nft" />
      <S.BidButton type="primary" onClick={handleViewProjectClick}>
        {t('View Project')}
      </S.BidButton>
      <S.NftCollectionInfo>
        <S.InfoRow>
          <S.Title level={5}>{title}</S.Title>
        </S.InfoRow>
        <S.InfoRow>
          <S.USDText>{getCurrencyPrice(formatNumberWithCommas(usd_value), CurrencyTypeEnum.ZMW)}</S.USDText>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </S.Card>
  );
};
