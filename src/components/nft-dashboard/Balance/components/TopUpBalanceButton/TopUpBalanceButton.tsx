import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from './TopUpBalanceButton.styles';

interface TopUpBalanceButtonProps {
  onClick: () => void;
  count: number;
}

export const TopUpBalanceButton: React.FC<TopUpBalanceButtonProps> = ({ onClick, count }) => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <S.TopUpButton type={theme === 'dark' ? 'ghost' : 'primary'} block onClick={onClick}>
      {count > 0 ? `${count}` : 'No Data'}
    </S.TopUpButton>
  );
};
