import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <h2 style={{ margin: "20px 0" }}>Todo App</h2>
      <TodoList />
    </>
  );
};
export default Home;
