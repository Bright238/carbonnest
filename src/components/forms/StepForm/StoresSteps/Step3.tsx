import React from 'react';
import { Row, Col, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

const { Dragger } = Upload;

interface Step3Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step3: React.FC<Step3Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  return (
    <S.FormContent>
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={4}>
            {t('Upload high quality images for feedstock')}
          </Typography.Title>
          <Typography.Text>{t('Ensure the images are clear and high resolution')}</Typography.Text>
          <Dragger
            name="feedstock"
            action="/upload.do"
            listType="picture-card"
            accept="image/*"
            maxCount={5} 
            showUploadList={false} 
            beforeUpload={(file) => {
              const isImage = file.type.startsWith('image/');
              if (!isImage) {
                message.error(t('You can only upload image files'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >
         
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload Feedstock')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>

      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={4}>
            {t('Upload high quality video for production process')}
          </Typography.Title>
          <Typography.Text>{t('Maximum length: 2 minutes')}</Typography.Text>
          <Dragger
            name="production-process"
            action="/upload.do"
            listType="picture-card"
            accept="video/*"
            maxCount={1}
            showUploadList={false}
            beforeUpload={(file) => {
              const isVideo = file.type.startsWith('video/');
              if (!isVideo) {
                message.error(t('You can only upload video files'));
              }
              return isVideo;
            }}
            style={{ marginTop: '16px' }} 
          >
            {/* Wrapper for Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload Production Process')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>

      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={4}>
            {t('Upload high quality video of biochar produced')}
          </Typography.Title>
          <Typography.Text>{t('Maximum length: 2 minutes')}</Typography.Text>
          <Dragger
            name="biochar-produced"
            action="/upload.do"
            listType="picture-card"
            accept="video/*"
            maxCount={1}
            showUploadList={false}
            beforeUpload={(file) => {
              const isVideo = file.type.startsWith('video/');
              if (!isVideo) {
                message.error(t('You can only upload video files'));
              }
              return isVideo;
            }}
            style={{ marginTop: '16px' }}
          >
            {/* Wrapper for Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload Biochar Produced')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>

      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={4}>
            {t('Upload high quality images for application')}
          </Typography.Title>
          <Typography.Text>{t('Ensure the images are high resolution and clear')}</Typography.Text>
          <Dragger
            name="application-images"
            action="/upload.do"
            listType="picture-card"
            accept="image/*"
            maxCount={5}
            showUploadList={false}
            beforeUpload={(file) => {
              const isImage = file.type.startsWith('image/');
              if (!isImage) {
                message.error(t('You can only upload image files'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }} 
          >
            {/* Wrapper for Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload Application')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
    </S.FormContent>
  );
};
