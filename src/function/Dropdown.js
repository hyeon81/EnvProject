import { Menu, Dropdown, Button, Space } from 'antd';

const menu = (
    <Menu
        items={[
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                ),
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                    </a>
                ),
            },
        ]}
    />
);

export default () => (
    <Space direction="vertical">
        <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottom">
                <Button>bottom</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
            </Dropdown>
        </Space>
        <Space wrap>
            <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="top">
                <Button>top</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
            </Dropdown>
        </Space>
    </Space>
);