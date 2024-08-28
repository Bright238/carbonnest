import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const Payments: React.FC = () => {
  const { isTablet } = useResponsive();
  const location = useLocation();

  const householdId: string | undefined = location.state?.household_id;

  const content = useMemo(
    () => (
      <BaseRow gutter={[0, 30]}>y
        <BaseCol span={24}>
        
          {householdId && <PaymentHistory household_id={householdId} />}

        </BaseCol>
      </BaseRow>
    ),
    [householdId],
  );

  return isTablet ? <BaseCard>{content}</BaseCard> : content;
};