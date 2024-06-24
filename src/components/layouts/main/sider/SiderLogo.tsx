import React from 'react';
import * as S from './MainSider/MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import logo from 'assets/logo.png';
import logoDark from 'assets/logo-dark.png';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  const theme = useAppSelector((state) => state.theme.theme);

  const img = theme === 'dark' ? logoDark : logo;

  return (
    <S.SiderLogoDiv>
     <S.SiderLogoLink to="/">
        <img
          src="https://www.mcdss.gov.zm/wp-content/uploads/2021/12/Mcdsslogo.EDITED-1.png"
          alt="logo"
          style={{ width: '210px', height: 'auto' }}
        />
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
