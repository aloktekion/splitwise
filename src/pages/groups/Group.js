import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGroupId } from '../../redux/gruop/addGroupAction';
import styles from './group.module.css';

const Group = ({ setIsSidebarOpen, setAddGroupOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addGroupModal = () => {
    setAddGroupOpen(true);
  };

  const gotodashboard = (groupID) => {
    // console.log('button clicked');
    dispatch(getGroupId(groupID));
    setIsSidebarOpen(true);
    navigate('/home');
  };
  const groups = useSelector((reduxStore) => reduxStore.groups);
  const currentUser = useSelector(
    (reduxStore) => reduxStore.reduce.currentUser
  );
  // console.log(currentUser);
  // console.log(groups);
  return (
    <div className={styles.group__Container}>
      {currentUser?.groupID.map((key) => (
        <button onClick={() => gotodashboard(key)}>
          {groups.group[key]?.groupName}
          {/* think about it */}
        </button>
      ))}

      <button onClick={addGroupModal}>Add Group</button>
    </div>
  );
};

export default Group;
