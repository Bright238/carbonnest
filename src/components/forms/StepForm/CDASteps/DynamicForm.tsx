import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './DynamicForm.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const DynamicForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [form] = BaseButtonsForm.useForm();
  const { t } = useTranslation();

  const onFinish = (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  const handleChange = () => {
    form.setFieldsValue({ participants: [] });
  };

  return (
    <BaseButtonsForm
      form={form}
      name="dynamicForm"
      isFieldsChanged={isFieldsChanged}
      loading={isLoading}
      onFinish={onFinish}
      autoComplete="off"
      onFieldsChange={() => setFieldsChanged(true)}
      initialValues={{
        services: [
          { services: '', service_provider: '' },
          { services: '', service_provider: '' },
          { services: '', service_provider: '' },
        ], // Add initial values
      }}
    >
      <BaseButtonsForm.List name="services">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <BaseRow key={field.key} wrap={false} gutter={[10, 10]} align="middle" justify="space-between">
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    label={t('Type of Service')}
                    name={[field.name, 'services']}
                    fieldKey={[field.key, 'services']}
                    rules={[{ required: true, message: t('forms.dynamicFormLabels.fullNameError') }]}
                  >
                    <BaseInput />
                  </BaseButtonsForm.Item>
                </BaseCol>
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    label={t('Name of Service Provider')}
                    name={[field.name, 'service_provider']}
                    fieldKey={[field.key, 'service_provider']}
                    rules={[{ required: true, message: t('forms.dynamicFormLabels.positionOrRoleError') }]}
                  >
                    <BaseInput />
                    <S.RemoveBtn onClick={() => remove(field.name)} />
                  </BaseButtonsForm.Item>
                </BaseCol>
              </BaseRow>
            ))}

            <BaseButtonsForm.Item>
              <BaseButton type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {t('Add More Services')}
              </BaseButton>
            </BaseButtonsForm.Item>
          </>
        )}
      </BaseButtonsForm.List>
    </BaseButtonsForm>
  );
};
