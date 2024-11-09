import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from '@app/styles/themes/constants';
import styled from 'styled-components';

interface ValueTextProps {
  $color: 'success' | 'error';
}

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.xl};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xxl};

  font-weight: ${FONT_WEIGHT.bold};

  font-family: ${FONT_FAMILY.secondary};
`;

export const ValueText = styled(BaseTypography.Text)<ValueTextProps>`
  font-size: ${FONT_SIZE.xl};

  font-family: ${FONT_FAMILY.secondary};

  color: ${(props) => `var(--${props.$color}-color)`};
`;
