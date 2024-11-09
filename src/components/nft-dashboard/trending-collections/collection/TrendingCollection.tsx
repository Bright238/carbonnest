import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { TrendingActivity } from '@app/api/activity.api';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import * as S from './TrendingCollection.styles';

export const TrendingCollection: React.FC<TrendingActivity> = ({ title, owner, usd_value, image, avatar }) => {
  const { t } = useTranslation();

  return (
    <S.Card padding={0} $img={image}>
      <S.CollectionImage src='https://media.istockphoto.com/id/543185364/photo/young-african-male-and-adult-african-woman-working-in-garden.jpg?s=2048x2048&w=is&k=20&c=Q9xITl02yzDAFEgyYrIe_6LQx-o01ghN6ERXnDjJdEw=' alt="nft" />
      <S.BidButton type="primary">{t('View Project')}</S.BidButton>
      <S.NftCollectionInfo>
        {/* <S.AuthorAvatarWrapper>
          <BaseAvatar shape="circle" size={64} src={avatar} alt={owner} />
        </S.AuthorAvatarWrapper> */}
        <S.InfoRow>
          <S.Title level={5}>{title}</S.Title>
        </S.InfoRow>
        <S.InfoRow>
          <S.OwnerText>
             {t('nft.by')} {/*{owner} */} Bright Mafungautsi
          </S.OwnerText>
          <S.USDText>{getCurrencyPrice(formatNumberWithCommas(usd_value), CurrencyTypeEnum.ZMW)}</S.USDText>
        </S.InfoRow>
      </S.NftCollectionInfo>
    </S.Card>
  );
};
