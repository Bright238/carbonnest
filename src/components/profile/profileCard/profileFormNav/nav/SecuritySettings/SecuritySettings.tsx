import React, { useRef } from 'react';
import { Form, Input, Button, DatePicker, Space, Typography, message } from 'antd';
import SignatureCanvas from 'react-signature-canvas';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useTranslation } from 'react-i18next';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';

export const FarmerDeclarationForm: React.FC = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const sigCanvasBurning = useRef<SignatureCanvas | null>(null);
  const sigCanvasTree = useRef<SignatureCanvas | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const clearSignature = (canvasRef: React.RefObject<SignatureCanvas>) => {
    canvasRef.current?.clear();
  };

  const handleSubmit = async (values: any) => {
    const burningSignature = sigCanvasBurning.current?.toDataURL();
    const treeSignature = sigCanvasTree.current?.toDataURL();

    if (!burningSignature || !treeSignature) {
      message.error('Please ensure all signatures are provided.');
      return;
    }

    // Attach signatures to the form values
    values.signatureBurning = burningSignature;
    values.signatureTree = treeSignature;

    console.log('Form Submitted:', values);
    message.success('Form submitted successfully!');
  };

  const generatePDF = async () => {
    if (!formRef.current) {
      message.error('Form content is not available for export.');
      return;
    }

    const doc = new jsPDF();

    await html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 190; // Adjust as per your requirement
      const pageHeight = 295; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10; // Initial position on page

      // Add the first page
      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Ensure the second section starts on a new page
      if (heightLeft >= 0) {
        doc.addPage();
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      }
    });

    doc.save('Farmer_Declaration_Agreement.pdf');
  };

  return (
    <div>
      {/* Form Container for PDF Export */}
      <div ref={formRef}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* CEASE OPEN FIELD BURNING Section */}
          <BaseCard>
            <Typography.Title level={4}>
              {t('Farmer Declaration Agreement - Cease Open Field Burning')}
            </Typography.Title>
            <p>
              This non-binding agreement records the farmer's written intent to cease open-field
              burning of crop waste biomass and instead use the biomass to produce biochar, reducing emissions.
            </p>

            <Form.Item
              label="Farmer Name"
              name="farmerNameBurning"
              rules={[{ required: true, message: 'Please enter the farmer\'s name' }]}
            >
              <Input placeholder="Enter farmer's name" />
            </Form.Item>

            <Form.Item
              label="Landowner Name"
              name="landownerNameBurning"
              rules={[{ required: true, message: 'Please enter the landowner\'s name' }]}
            >
              <Input placeholder="Enter landowner's name" />
            </Form.Item>

            <Form.Item
              label="Land Location Coordinates"
              name="landCoordinatesBurning"
              rules={[{ required: true, message: 'Please enter the land coordinates' }]}
            >
              <Input placeholder="Enter land location coordinates (e.g., latitude, longitude)" />
            </Form.Item>

            <Form.Item
              label="Size of the Crop Field"
              name="cropFieldSizeBurning"
              rules={[{ required: true, message: 'Please enter the crop field size' }]}
            >
              <Input placeholder="Enter size of the crop field (e.g., 2 hectares)" />
            </Form.Item>

            <Form.Item
              label="Land Use / Crop"
              name="landUseCropBurning"
              rules={[{ required: true, message: 'Please enter the land use or crop information' }]}
            >
              <Input.TextArea rows={2} placeholder="Enter land use or crop details (e.g., maize, crop rotation)" />
            </Form.Item>

            <Space>

              <Form.Item
                label="Signature"
                name="signatureTree"
                rules={[{ required: true, message: 'Please add your signature' }]}
              >
                <div>
                  <SignatureCanvas
                    ref={sigCanvasTree}
                    canvasProps={{ width: 400, height: 150, className: 'signatureCanvas' }}
                    backgroundColor="#f5f5f5"
                  />
                  <br />
                  <br />
                  <Button onClick={() => clearSignature(sigCanvasTree)}>Clear Signature</Button>
                </div>
              </Form.Item>

            </Space>
            <Form.Item
              label="Date"
              name="dateTree"
              rules={[{ required: true, message: 'Please select the date' }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={styles.submitButton}>
                Submit Form
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={generatePDF} style={styles.exportButton}>
                Export Agremment As PDF
              </Button>
            </Form.Item>
          </BaseCard>

          <br />
          <br />
          <Typography.Title level={4}>
            {t('Farmer Declaration Agreement - Tree Planting')}
          </Typography.Title>

          {/* TREE PLANTING AGREEMENT Section */}
          <BaseCard>
            <p>
              This non-binding agreement records the farmer's written intent to plant and care for a tree for a minimum of 20 years, compensating for emissions created during biochar production.
            </p>

            <Form.Item
              label="Farmer Name"
              name="farmerNameTree"
              rules={[{ required: true, message: 'Please enter the farmer\'s name' }]}
            >
              <Input placeholder="Enter farmer's name" />
            </Form.Item>

            <Form.Item
              label="Landowner Name"
              name="landownerNameTree"
              rules={[{ required: true, message: 'Please enter the landowner\'s name' }]}
            >
              <Input placeholder="Enter landowner's name" />
            </Form.Item>

            <Form.Item
              label="Land Location Coordinates"
              name="landCoordinatesTree"
              rules={[{ required: true, message: 'Please enter the land coordinates' }]}
            >
              <Input placeholder="Enter land location coordinates (e.g., latitude, longitude)" />
            </Form.Item>

            <Form.Item
              label="Size of the Crop Field"
              name="cropFieldSizeTree"
              rules={[{ required: true, message: 'Please enter the crop field size' }]}
            >
              <Input placeholder="Enter size of the crop field (e.g., 2 hectares)" />
            </Form.Item>

            <Form.Item
              label="Land Use / Crop"
              name="landUseCropTree"
              rules={[{ required: true, message: 'Please enter the land use or crop information' }]}
            >
              <Input.TextArea rows={2} placeholder="Enter land use or crop details (e.g., maize, crop rotation)" />
            </Form.Item>

            <Form.Item
              label="Number of Trees and Tree Species"
              name="treeDetails"
              rules={[{ required: true, message: 'Please enter the tree details' }]}
            >
              <Input.TextArea rows={2} placeholder="Enter the number of trees and their species (e.g., 5 mango trees)" />
            </Form.Item>

            <Form.Item
              label="Plantation Time Period and Location"
              name="plantationDetails"
              rules={[{ required: true, message: 'Please provide the plantation details' }]}
            >
              <Input.TextArea rows={2} placeholder="Enter time period and location (e.g., January 2024, field 3)" />
            </Form.Item>

            <Space>

              <Form.Item
                label="Signature"
                name="signatureTree"
                rules={[{ required: true, message: 'Please add your signature' }]}
              >
                <div>
                  <SignatureCanvas
                    ref={sigCanvasTree}
                    canvasProps={{ width: 400, height: 150, className: 'signatureCanvas' }}
                    backgroundColor="#f5f5f5"
                  />
                  <br />
                  <br />
                  <Button onClick={() => clearSignature(sigCanvasTree)}>Clear Signature</Button>
                </div>
              </Form.Item>

            </Space>
            <Form.Item
              label="Date"
              name="dateTree"
              rules={[{ required: true, message: 'Please select the date' }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={styles.submitButton}>
                Submit Form
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={generatePDF} style={styles.exportButton}>
                Export Agremment As PDF
              </Button>
            </Form.Item>
          </BaseCard>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  submitButton: {
    width: '100%',
    padding: '12px 0',
    marginBottom: '10px',
  },
  exportButton: {
    borderRadius: '50px',
    background: 'linear-gradient(to left, #f5af19, #f12711)',
    color: 'white',
    borderTopRightRadius: '90%',
    border: 'none',
    padding: '10px 20px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    marginBottom: '10px',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export const SecuritySettings: React.FC = () => (
  <BaseCard>
    <BaseRow gutter={[30, 0]}>
      <BaseCol xs={24} xl={24}>
        <FarmerDeclarationForm />
      </BaseCol>
    </BaseRow>
  </BaseCard>
);
