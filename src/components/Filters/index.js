import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterChangeRadio, filterPriority, searchInput } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('');
  const [choseRadio, setChoseRadio] = useState('All');
  const [chosePriorities, setChosePriorities] = useState([]);
  const dispatch = useDispatch();

  const handleOnchangeSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchInput(e.target.value));
  }

  const handleChangeRadio = (e) => {
    setChoseRadio(e.target.value);
    dispatch(filterChangeRadio(e.target.value));
  }

  const handleChangePriorities = (value) => {
    setChosePriorities(value);
    dispatch(filterPriority(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleOnchangeSearch} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={choseRadio} onChange={handleChangeRadio}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={chosePriorities}
          onChange={handleChangePriorities}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
