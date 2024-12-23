import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BREAKPOINTS, FONT_SIZE } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

export const SectionWrapper = styled.div`
  .slick-slide > div {
    display: flex;
  }

  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 0.625rem;
`;

export const ArrowBtn = styled(BaseButton)`
  color: var(--text-nft-light-color);
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-size: ${FONT_SIZE.lg};
  }
`;
