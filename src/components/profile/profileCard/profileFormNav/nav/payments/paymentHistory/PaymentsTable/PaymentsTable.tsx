import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ColumnType } from 'antd/lib/table';
import { Dates } from 'constants/Dates';
import { Status } from '../Status/Status';
import { paymentStatuses, PaymentStatus } from 'constants/paymentStatuses';
import { defineColorByPriority, getCurrencyPrice } from '@app/utils/utils';
import { Payment } from 'api/paymentHistory.api';
import * as S from './PaymentsTable.styles';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';

interface Recipient {
  name: string;
  img: string;
}

interface Status {
  key: number;
  recipient: Recipient;
  date: number;
  status: PaymentStatus | undefined;
  totalAmount: string | React.ReactNode;
}

interface PaymentsTableProps {
  payments: Payment[];
}

export const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
  const { t } = useTranslation();

  const columns: ColumnType<any>[] = useMemo(() => {
    return [
      {
        title: t('profile.nav.payments.recipient'),
        dataIndex: 'recipient',
        key: 'recipient',
        render: (recipient: Recipient) => (
          <S.RecipientWrapper>
            <BaseAvatar src={recipient.img} alt={recipient.name} />
            {recipient.name}
          </S.RecipientWrapper>
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.date'),
        dataIndex: 'date',
        key: 'date',
        render: (text: string) => Dates.format(text, 'LL'),
        sorter: (a, b) => a.date - b.date,
        align: 'center',
      },
      {
        title: t('profile.nav.payments.status.title'),
        dataIndex: 'status',
        key: 'status',
        render: (status: PaymentStatus) => (
          <Status color={defineColorByPriority(status.priority)} text={t(status.name).toUpperCase()} />
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.totalAmount'),
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'center',
      },
      {
        title: '',
        dataIndex: 'details',
        key: 'details',
        align: 'center',
        render: () => <BaseButton type="link">{t('profile.nav.payments.details')}</BaseButton>,
      },
    ];
  }, [t]);

  const dataSource: Status[] = useMemo(() => {
    return payments.map((payment, index) => ({
      key: index,
      recipient: {
        name: `${payment.first_name} ${payment.last_name}`,
        img: payment.imgUrl,
      },
      date: payment.date,
      status: paymentStatuses.find((status) => status.id === payment.status),
      totalAmount: getCurrencyPrice(payment.amount, payment.currency),
      details: payment,
      // Additional fields from the Payment interface
      first_name: payment.first_name,
      last_name: payment.last_name,
      birthdate: payment.birthdate,
      gender: payment.gender,
      province: payment.province,
      district: payment.district,
      cwac: payment.cwac,
      date_created: payment.date_created,
      disability: payment.disability,
      relationship: payment.relationship,
      other_relationship: payment.other_relationship,
      is_index: payment.is_index,
      unique_id: payment.unique_id,
      household_id: payment.household_id,
      ward: payment.ward,
      year: payment.year,
    }));
  }, [payments]);

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <S.PaymentHistoryTable size="middle" columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};
