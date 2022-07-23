const Todo: React.FC<{
  text: string;
  listId: number;
  handleRemoveClick: (listId: number) => void;
}> = ({ text, handleRemoveClick, listId }) => {
  return (
    <>
      <li
        className='item'
        onClick={() => {
          handleRemoveClick(listId);
        }}
      >
        {text}
      </li>
    </>
  );
};

export default Todo;
