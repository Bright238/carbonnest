import React from 'react';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { Dates } from 'constants/Dates';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import * as S from './Payment.styles';
import { Button, Typography } from 'antd';

interface HouseholdMember {
  first_name: string;
  last_name: string;
  birthdate: string;
  gender: string;
  province: string;
  district: string;
  cwac: string;
  date_created: string;
  disability: string;
  relationship: string;
  other_relationship: string | null;
  is_index: boolean | null;
  unique_id: string;
  household_id: string;
  ward: string;
  year: number;
}

interface PaymentProps {
  member: HouseholdMember;
}

export const Payment: React.FC<PaymentProps> = ({ member }) => {
  const { t } = useTranslation();

  const isIndexText = member.is_index ? 'Yes' : 'No';

  return (
    <S.ContentWrapper className="content-wrapper">
      <S.Header style={{ backgroundColor: member.is_index ? '#E8F5E9' : '#f8fbff' }}>
        <S.Item>
          <S.Subtitle>{t('Full Name')}</S.Subtitle>
          <S.Text>{`${member.first_name} ${member.last_name}`}</S.Text> 
          {member.is_index && (
            <Typography style={{ fontWeight: "400" }}>
              This child is the primary Index VCA in this household.
            </Typography>
          )}
        </S.Item>
        <div style={{ flex: 1 }} />
        <Button type='primary'>View Profile</Button>
      </S.Header>
      <S.Header>
        <S.Item>
          <S.Subtitle>{t('Birthdate')}</S.Subtitle>
          <S.Text>{member.birthdate}</S.Text>
          <S.Subtitle>{t('Gender')}</S.Subtitle>
          <S.Text>{member.gender}</S.Text>
          <S.Subtitle>{t('Disability')}</S.Subtitle>
          <S.Text>{member.disability}</S.Text>
          <S.Subtitle>{t('Relationship')}</S.Subtitle>
          <S.Text>{member.relationship}</S.Text>
          <S.Subtitle>{t('Is this child the primary Index VCA?')}</S.Subtitle>
          <S.Text>{isIndexText}</S.Text>
          <S.Subtitle>{t('Ward')}</S.Subtitle>
          <S.Text>{member.ward}</S.Text>
        </S.Item>
      </S.Header>
    </S.ContentWrapper>
  );
};