import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY, media, BORDER_RADIUS } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
interface CardInternalProps {
  $img: string;
}

export const CollectionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
`;

export const NftCollectionInfo = styled.div`
  position: relative;
  padding: 2rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 0.1rem;
  }
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.md};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};
`;

export const OwnerText = styled(Text)`
  letter-spacing: 0.02em;

  font-size: ${FONT_SIZE.xxs};

  font-weight: ${FONT_WEIGHT.regular};

  font-family: ${FONT_FAMILY.secondary};

  color: var(--text-nft-light-color);

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const USDText = styled(BaseTypography.Text)`
  font-weight: ${FONT_WEIGHT.semibold};

  font-size: ${FONT_SIZE.xs};
`;

export const AuthorAvatarWrapper = styled.div`
  position: absolute;
  top: -45px;
  border-radius: 50%;

  border: 2px solid var(--text-secondary-color);
`;

export const BidButton = styled(BaseButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 14px;

  color: var(--text-secondary-color);

  border-color: var(--text-secondary-color);

  font-size: ${FONT_SIZE.md};
`;

export const Card = styled(NFTCard)<CardInternalProps>`
  overflow: hidden;

  &:hover {
    & {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
    }
  }
  }
`;
