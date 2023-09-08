import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [ipData, setIpData] = useState("");

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(`todoList`));
    setTask(list || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(`todoList`, JSON.stringify(task));
  }, [task]);

  const ipChangeHandler = (e) => setIpData(e.target.value);

  const btnClickHandler = () => {
    const trimIpData = ipData.trim();
    if (trimIpData) {
      const taskObj = {
        item: trimIpData,
        isDone: false,
        isEditing: false,
        editingItem: trimIpData,
      };
      setTask([...task, taskObj]);
    }
    setIpData("");
  };

  const ipKeyHandler = (e) => {
    if (e.key === "Enter") {
      btnClickHandler();
    }
  };

  const isEditHandler = (index) => {
    const listCopy = [...task];
    listCopy[index].isEditing = true;
    setTask(listCopy);
  };

  const listIpChangeHandler = (index, newValue) => {
    const listCopy = [...task];
    listCopy[index].editingItem = newValue;
    setTask(listCopy);
  };

  const saveHandler = (index) => {
    const listCopy = [...task];
    const trimEditedData = listCopy[index].editingItem.trim();
    if (trimEditedData) {
      listCopy[index].item = trimEditedData;
      listCopy[index].isEditing = false;
      setTask(listCopy);
    } else {
      cancelHandler(index);
    }
  };

  const cancelHandler = (index) => {
    const listCopy = [...task];
    listCopy[index].editingItem = listCopy[index].item;
    listCopy[index].isEditing = false;
    setTask(listCopy);
  };

  const isDoneHandler = (index) => {
    const listCopy = [...task];
    listCopy[index].isDone = true;
    setTask(listCopy);
  };

  const isDeleteHandler = (index) => {
    const listCopy = [...task];
    listCopy.splice(index, 1);
    setTask(listCopy);
  };

  const swapItems = (index, finalIndex) => {
    const listCopy = [...task];
    const temp = listCopy[index];
    listCopy[index] = listCopy[finalIndex];
    listCopy[finalIndex] = temp;
    setTask(listCopy);
  };

  const clearBtnHandler = () => {
    setTask([]);
  };

  return (
    <>
      <Input
        changeHandler={ipChangeHandler}
        enterKeyHandler={ipKeyHandler}
        value={ipData}
      />
      <span style={{ marginLeft: "10px" }}></span>
      <Button
        btnName="Add Task"
        clickHandler={btnClickHandler}
        isDisabled={!ipData}
      />
      <div style={{ marginTop: "20px" }}>
        <List
          listElement={task}
          isDoneHandler={isDoneHandler}
          isDeleteHandler={isDeleteHandler}
          moveHandler={swapItems}
          isEditHandler={isEditHandler}
          listIpChangeHandler={listIpChangeHandler}
          saveHandler={saveHandler}
          cancelHandler={cancelHandler}
        />
      </div>
      <div>
        <Button
          btnName="Clear List"
          clickHandler={clearBtnHandler}
          isDisabled={task.length === 0}
        />
      </div>
    </>
  );
};
export default TodoList;
