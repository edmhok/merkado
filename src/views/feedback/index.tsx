import { useEffect } from 'react';
import { Widget } from '@typeform/embed-react';
import { Col, Typography } from 'antd';


const TYPE_FORM_ID = 'https://forms.gle/6HAoWACwaRyZ5Wgc9';

const Feedback: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Col xs={24} sm={24} md={12} lg={12} style={{ marginTop: '40px' }}>
            <Typography.Title level={1}>Sign Up Form</Typography.Title>

            <div style={{ height: 800, marginTop: '20px' }}>
                <Widget id={TYPE_FORM_ID} style={{ width: '100%', height: '100%' }} />
            </div>
        </Col>
    );
};

export default Feedback;