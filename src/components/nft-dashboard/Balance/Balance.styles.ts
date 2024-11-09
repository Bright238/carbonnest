import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import styled from 'styled-components';
import { LAYOUT, media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const TitleText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 1.25rem;

    font-size: ${FONT_SIZE.lg};
  }
`;

export const TitleBalanceText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-family: ${FONT_FAMILY.secondary};
  }
`;

export const SubtitleBalanceText = styled(BaseTypography.Text)`
  font-family: ${FONT_FAMILY.secondary};

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  color: var(--text-nft-light-color);
`;

export const RightSideCol = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  background-color: var(--sider-background-color);
  overflow-y: auto;
`;

export const LeftSideCol = styled(BaseCol)`
  @media only screen and ${media.xl} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: calc(100vh - ${LAYOUT.desktop.headerHeight});
    overflow: auto;
  }
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;

  background: black;

  min-height: 300px;
  overflow-y: auto;
`;

export const Item = styled.div`
  background: red;
  height: 150px;
  flex-shrink: 0;
`;
