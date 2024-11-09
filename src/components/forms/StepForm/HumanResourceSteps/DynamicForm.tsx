import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './DynamicForm.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { FormInstance } from 'antd/es/form';

interface DynamicFormProps {
  form: FormInstance;
  handleChange: (fieldName: string, value: any) => void;
}

export const DynamicForm = forwardRef(({ form }: DynamicFormProps, ref) => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [participants, setParticipants] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    getParticipants: () => participants,
  }));

  // Sync form values with participants state
  useEffect(() => {
    const updatedParticipants = form.getFieldValue('participants') || [];
    setParticipants(updatedParticipants);
  }, [form]);

  const onFinish = (values: any) => {
    setLoading(true);

    const participantList = values.participants || [];
    console.log('Form data being sent to API:', participantList);

    const formData = {
      ...values,
      list_of_district_participants: participantList,
    };

    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });

      // Example API call:
      // api.post('/participants', formData).then(() => { /* handle success */ })
    }, 1000);
  };

  const onValuesChange = (changedValues: any, allValues: any) => {
    // Merge the changes with the existing participants state
    const updatedParticipants = allValues.participants || [];

    setParticipants(updatedParticipants); // Update state with the full array
    form.setFieldsValue({ list_of_district_participants: updatedParticipants }); // Sync form values
    setFieldsChanged(true);
  };

  return (
    <BaseButtonsForm
      form={form}
      name="dynamicForm"
      isFieldsChanged={isFieldsChanged}
      loading={isLoading}
      onFinish={onFinish}
      autoComplete="off"
      onValuesChange={onValuesChange} // Ensure dynamic updates
      initialValues={{ participants: [] }}
      footer={undefined}
    >
      <BaseButtonsForm.List name="participants">
        {(fields, { add, remove }) => (
          <>
            {fields.length === 0 && (
              <BaseRow justify="center">
                <span>{t('No participants added yet')}</span>
              </BaseRow>
            )}

            {fields.map((field) => (
              <BaseRow key={field.key} wrap={false} gutter={[10, 10]} align="middle" justify="space-between">
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    name={[field.name, 'name']}
                    label={t('Full Names')}
                    rules={[{ required: true, message: t('Please input the full name!') }]}
                  >
                    <BaseInput placeholder={t('Enter full name')} />
                  </BaseButtonsForm.Item>
                </BaseCol>
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    name={[field.name, 'role']}
                    label={t('Position / Role')}
                    rules={[{ required: true, message: t('Please input the position or role!') }]}
                  >
                    <BaseInput placeholder={t('Enter position or role')} />
                  </BaseButtonsForm.Item>
                  <S.RemoveBtn type="link" onClick={() => remove(field.name)}>
                    {t('Remove')}
                  </S.RemoveBtn>
                </BaseCol>
              </BaseRow>
            ))}

            <BaseButtonsForm.Item>
              <BaseButton type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {t('Add Participant')}
              </BaseButton>
            </BaseButtonsForm.Item>
          </>
        )}
      </BaseButtonsForm.List>
    </BaseButtonsForm>
  );
});
