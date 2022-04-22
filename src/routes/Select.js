import React from "react";
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default () => (
    <>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">장미</Option>
            <Option value="lucy">민들레</Option>
            <Option value="Yiminghe">튤립</Option>
        </Select>
    </>
);