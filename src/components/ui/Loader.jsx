import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';

const Loader = () => {
    return (
        <Space>
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                        }}
                        spin
                    />
                }
            />
        </Space>
    );
};

export default Loader;