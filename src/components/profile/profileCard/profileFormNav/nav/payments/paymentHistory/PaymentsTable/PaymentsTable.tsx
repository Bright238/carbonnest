import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ColumnType } from 'antd/lib/table';
import { Status } from '../Status/Status';
import { paymentStatuses, PaymentStatus } from 'constants/paymentStatuses';
import { defineColorByPriority, getCurrencyPrice } from '@app/utils/utils';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import * as S from './PaymentsTable.styles';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';

interface Recipient {
  name: string;
  img: string;
}

interface Payment {
  recipient: string;
  imgUrl: string;
  date: number;
  status: number;
  amount: number;
  currency: CurrencyTypeEnum; // Use the enum type here
}

interface PaymentWithDisplay {
  key: number;
  recipient: Recipient;
  date: number;
  status: PaymentStatus | undefined; // Allow for full `PaymentStatus` objects here
  totalAmount: string | React.ReactNode;
  details: Payment;
}

interface PaymentsTableProps {
  payments?: Payment[];
}

const dummyPayments: Payment[] = [
  {
    recipient: 'Bright Mafungautsi',
    imgUrl: 'pexels-thirdman-7656731.jpg',
    date: Date.now() - 86400000 * 5, // 5 days ago
    status: 1,
    amount: 500,
    currency: CurrencyTypeEnum.ZMW, // Use the enum values
  },
  {
    recipient: 'Bright Mafungautsi',
    imgUrl: 'pexels-thirdman-7656731.jpg',
    date: Date.now() - 86400000 * 15, // 15 days ago
    status: 2,
    amount: 750,
    currency: CurrencyTypeEnum.ZMW,
  },
  {
    recipient: 'Bright Mafungautsi',
    imgUrl: 'pexels-thirdman-7656731.jpg',
    date: Date.now() - 86400000 * 30, // 30 days ago
    status: 3,
    amount: 1000,
    currency: CurrencyTypeEnum.ZMW,
  },
];

export const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments = dummyPayments }) => {
  const { t } = useTranslation();

  const columns: ColumnType<PaymentWithDisplay>[] = useMemo(() => {
    return [
      {
        title: t('profile.nav.payments.recipient'),
        dataIndex: 'recipient',
        key: 'recipient',
        render: (recipient: Recipient) => (
          <S.RecipientWrapper>
            <BaseAvatar  src="https://media.licdn.com/dms/image/v2/D4D35AQHIcurwOOq1JA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727110590756?e=1731747600&v=beta&t=b5KmlYmY-A_iKGqBnmgzDGH7kSRXcObhQlFD6AqjskI" />
            {recipient.name}
          </S.RecipientWrapper>
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.date'),
        dataIndex: 'date',
        key: 'date',
        render: (date: number) => new Date(date).toLocaleDateString(),
        sorter: (a, b) => a.date - b.date,
        align: 'center',
      },
      {
        title: t('profile.nav.payments.status.title'),
        dataIndex: 'status',
        key: 'status',
        render: (status: PaymentStatus | undefined) => (
          <Status color={status ? defineColorByPriority(status.priority) : ''} text={status ? t(status.name).toUpperCase() : ''} />
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

  const dataSource: PaymentWithDisplay[] = useMemo(
    () =>
      payments.map((payment, index) => ({
        key: index,
        recipient: {
          name: payment.recipient,
          img: payment.imgUrl,
        },
        date: payment.date,
        status: paymentStatuses.find((status) => status.id === payment.status),
        totalAmount: getCurrencyPrice(payment.amount, payment.currency),
        details: payment,
      })),
    [payments]
  );

  return <S.PaymentHistoryTable size="middle" columns={columns} dataSource={dataSource} pagination={false} />;
};
