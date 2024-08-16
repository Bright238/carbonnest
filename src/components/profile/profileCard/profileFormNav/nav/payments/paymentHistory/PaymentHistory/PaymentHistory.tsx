import React, { useEffect, useState } from 'react';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { Spin } from 'antd';
import axios from 'axios';
import { Payment } from '../Payment/Payment';
import * as S from './PaymentHistory.styles';

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

interface PaymentHistoryProps {
  household_id?: string;
}

export const PaymentHistory: React.FC<PaymentHistoryProps> = ({ household_id }) => {
  const [householdMembers, setHouseholdMembers] = useState<HouseholdMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouseholdMembers = async () => {
      try {
        const response = await axios.get(
          `https://ecapplus.server.dqa.bluecodeltd.com/household/household-members/${household_id}`
        );
        const members = response.data.data;
  
        // Sort the members to place the index VCA member at the beginning
        const sortedMembers = members.sort((a: { is_index: any; }, b: { is_index: any; }) => {
          if (a.is_index === b.is_index) {
            return 0;
          }
          return a.is_index ? -1 : 1;
        });
  
        setHouseholdMembers(sortedMembers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (household_id) {
      setLoading(true);
      fetchHouseholdMembers();
    }
  }, [household_id]);  

  return (
    <BaseRow gutter={[32, 32]}>
      <BaseCol span={24}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Spin size="small" />
            <p>Fetching Members. Please wait</p>
          </div>
        ) : (
          <S.ContentWrapper isEmptyHistory={householdMembers.length === 0}>
            {householdMembers.length > 0 && (
              <>
                {/* Find the index VCA member */}
                {householdMembers.find(member => member.is_index === true) ? (
                  <>
                    <h2>This is the index VCA to this household</h2>
                    <Payment
                      key={0}
                      member={householdMembers.find(member => member.is_index === true)!}
                    />
                  </>
                ) : null}
                {/* Show the rest of the members in a vertical scroll */}
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {householdMembers
                    .filter(member => member.is_index !== true) // Exclude the index VCA member
                    .map((member, index) => (
                      <Payment key={index + 1} member={member} />
                  ))}
                </div>
              </>
            )}
          </S.ContentWrapper>
        )}
      </BaseCol>
    </BaseRow>
  );
};
