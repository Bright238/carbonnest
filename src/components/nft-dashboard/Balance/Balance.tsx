import React, { useState } from 'react';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { TopUpBalanceModal } from './components/TopUpBalanceModal/TopUpBalanceModal'; // Import TopUpBalanceModal
import { TopUpBalanceButton } from './components/TopUpBalanceButton/TopUpBalanceButton';
import { TopUpData } from './interfaces/interfaces';
import * as S from './Balance.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface BalanceProps {
  title: string;
  count: number;
}

export const Balance: React.FC<BalanceProps> = ({
  title,
  count,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => setModalOpen((open) => !open);

  return (
    <BaseRow>
      <BaseCol span={24}>
        <NFTCard isSider>
          <BaseRow gutter={[30, 30]}>
            <BaseCol span={24}>
              <BaseRow gutter={[14, 14]}>
                <BaseCol span={24}>
                  <S.TitleBalanceText level={5} style={{ textAlign: "center" }}>
                    {title}
                  </S.TitleBalanceText>
                </BaseCol>
              </BaseRow>
            </BaseCol>

            <BaseCol span={24}>
              <TopUpBalanceButton onClick={handleModal} />
              <TopUpBalanceModal
                isOpen={isModalOpen}
                onOpenChange={handleModal}
                count={count} // Pass the count data to the modal
                cards={[]} loading={false} onFinish={function (data: TopUpData): void {
                  throw new Error('Function not implemented.');
                } }              />
            </BaseCol>
          </BaseRow>
        </NFTCard>
      </BaseCol>
    </BaseRow>
  );
};
