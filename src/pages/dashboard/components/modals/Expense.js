import React, { useState } from 'react';
import Modal from 'react-modal';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../../../redux/gruop/addGroupAction';
import { useSelector } from 'react-redux';

import Styles from './expense.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { background: 'rgba(0, 0, 0, 0.4)' },
};

const Expense = ({ expenseIsOpen, setExpenseIsOpen }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState('');
  const [value, setValue] = useState([]);

  const groupId = useSelector((reduxStore) => reduxStore.groups.group_id);
  const groups = useSelector((reduxStore) => reduxStore.groups.group);
  // console.log(alluser);
  const alluser = groups[groupId].members;
  console.log(alluser);
  const { Option } = Select;

  const children = [];
  if (alluser !== null) {
    Object.keys(alluser).forEach((element) => {
      children.push(<Option key={alluser[element]}>{alluser[element]}</Option>);
    });
  }
  const handleSubmit = () => {
    const Paidby = document.getElementById('paidBy').selectedOptions;

    const valuesby = Array.from(Paidby).map(({ value }) => value);
    console.log(valuesby);
    dispatch(addExpense(amount, desc, valuesby, value));
    setExpenseIsOpen(false);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setExpenseIsOpen(false);
  }

  // console.log(alluser);

  return (
    <Modal
      isOpen={expenseIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='login'>
        <i className='bi bi-cash-stack'></i>
        <h1>Add Expense !</h1>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type='text'
          placeholder='Add Desc *'
          required
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          placeholder='Amount in Rupee *'
          required
        />

        <div className={Styles.splitAmong}>
          <h3>Split among</h3>
          <Select
            mode='multiple'
            placeholder='Please select'
            onChange={(e) => setValue(e)}
            style={{ width: '170px' }}
          >
            {children}
          </Select>
        </div>

        <div className='paidByTo'>
          <div className={Styles.paidBy}>
            <h3>Paid by</h3>
            <select id='paidBy'>
              {alluser.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </Modal>
  );
};

export default Expense;
