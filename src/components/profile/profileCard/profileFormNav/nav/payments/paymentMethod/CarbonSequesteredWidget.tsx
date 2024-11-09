import React from 'react';
import { PaymentCard as IPaymentCard } from '@app/interfaces/interfaces';
import { PaymentCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCard/PaymentCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { ActionButtons } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/ActionButtons/ActionButtons';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useTranslation } from 'react-i18next';

interface PaymentCardsWidgetProps {
  cards: IPaymentCard[];
  onCardRemove: (cardNumber: string) => void;
  onCardAdd: (card: IPaymentCard) => void;
}

export const CarbonSequesteredWidget: React.FC<PaymentCardsWidgetProps> = ({ cards, onCardRemove, onCardAdd }) => {
  const { t } = useTranslation();
  const { useMediaQuery } = useResponsive();

  const breakpoint = 659.98; // calculated breakpoint for layout adjustment
  const isBreakpoint = useMediaQuery({ query: `(min-width: ${breakpoint}px)` });
  const justify = isBreakpoint ? 'start' : 'space-around';

  const retirementInfo = <>Credit Sale Retirements in 2024</>;

  return (
    <BaseRow justify={justify} gutter={[16, 16]}>
      {cards.map((card) => (
        <BaseCol key={card.number}>
          <PaymentCard cardData={card}>
            <ActionButtons onRemove={() => onCardRemove(card.number)} />
          </PaymentCard>
        </BaseCol>
      ))}

      <BaseCol>
        <div className="carbon-sequestered-amount">
          <p style={{ fontSize: '20px', textAlign: 'center' }}>{retirementInfo}</p>
          <BaseForm.Title style={{ fontSize: '30px', textAlign: 'center' }}>{t('30 tCO₂e')}</BaseForm.Title>
        </div>
      </BaseCol>
    </BaseRow>
  );
};
