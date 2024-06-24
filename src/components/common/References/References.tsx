import React from 'react';
import * as S from './References.styles';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <br />
      <S.Text>
        ACHIEVE - MIS{' '}
        <a href="https://www.mcdss.gov.zm/" rel="noreferrer">
          Program Management Platform{' '}<br />
        </a>
        2024 &copy;.{' '}
        <a href="https://www.mcdss.gov.zm/" rel="noreferrer">
          Ministry of Community Development and Social Services.
        </a>
      </S.Text>
    </S.ReferencesWrapper>
  );
};
