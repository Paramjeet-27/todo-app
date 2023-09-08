import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./List.module.css";

const List = ({
  listElement,
  isDoneHandler,
  isDeleteHandler,
  moveHandler,
  isEditHandler,
  saveHandler,
  cancelHandler,
  listIpChangeHandler,
}) => {
  const listItem = listElement.map((task, index) => (
    <li
      key={index}
      className={
        task.isDone
          ? `${styles.listItems} ${styles.isDoneCss}`
          : styles.listItems
      }
    >
      {!task.isEditing && (
        <>
          {task.item}
          <Button
            btnName="Edit"
            btnClass={styles.actBtn}
            isDisabled={task.isDone}
            clickHandler={() => {
              isEditHandler(index);
            }}
          />
        </>
      )}
      {task.isEditing && (
        <>
          <Input
            value={task.editingItem}
            changeHandler={(e) => {
              listIpChangeHandler(index, e.target.value);
            }}
          />
          <Button
            btnName="Save"
            btnClass={styles.actBtn}
            isDisabled={!task.editingItem.length}
            clickHandler={() => {
              saveHandler(index);
            }}
          />
          <Button
            btnName="Cancel"
            btnClass={styles.actBtn}
            clickHandler={() => {
              cancelHandler(index);
            }}
          />
        </>
      )}
      <Button
        btnName="Up"
        btnClass={styles.actBtn}
        isDisabled={index === 0}
        clickHandler={() => {
          moveHandler(index, index - 1);
        }}
      />
      <Button
        btnName="Down"
        btnClass={styles.actBtn}
        isDisabled={index === listElement.length - 1}
        clickHandler={() => {
          moveHandler(index, index + 1);
        }}
      />
      {!task.isDone && (
        <Button
          btnClass={styles.actBtn}
          btnName="Done"
          isDisabled={task.isEditing}
          clickHandler={() => {
            isDoneHandler(index);
          }}
        />
      )}
      {task.isDone && (
        <Button
          btnClass={styles.actBtn}
          btnName="Delete"
          clickHandler={() => {
            isDeleteHandler(index);
          }}
        />
      )}
    </li>
  ));
  return <ul className={styles.ulList}>{listItem}</ul>;
};
export default List;
