import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { todoRemaningSelector } from '../../redux/selectors';

export default function TodoList() {
  const [addTodoInput, setAddTodoInput] = useState();
  const [priority, setPriority] = useState('Medium');
  const selectorData = useSelector(todoRemaningSelector);
  const dispatch = useDispatch();

  const handleClickAddTodo = () => {
    if (!addTodoInput) {
      return alert("error");
    }

    dispatch(addTodo({
      id: uuidv4(),
      name: addTodoInput,
      completed: false,
      priority: priority
    }))

    setAddTodoInput('');

  }

  const handleOnchangeSelect = (value) => {
    setPriority(value);
  }

  const handleOnchangeInput = (e) => {
    setAddTodoInput(e.target.value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* {selectorData.map(todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} />)} */}
        {
          selectorData && selectorData.map((item, index) => {
            return (
              <Todo key={item.id} id={item.id} name={item.name} priority={item.priority} completed={item.completed} />
            )
          })
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={addTodoInput} onChange={handleOnchangeInput} />
          <Select defaultValue="Medium" value={priority} onChange={handleOnchangeSelect}>
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
          <Button type='primary' onClick={handleClickAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
