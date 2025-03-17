import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addUser, deleteUser, fetchUsers, User } from "./redux/usersSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.items);
  // const isLoading = useSelector((state: RootState) => state.users.isLoading);
  // const error = useSelector((state: RootState) => state.users.error);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   if (!users.length) {
  //     dispatch(fetchUsers());
  //   }
  // }, [dispatch, users.length]);

  const handleAddUser = () => {
    if (!name.trim() || !description.trim()) {
      return; // Игнорируем пустые поля
    }
    dispatch(addUser({ name, description }));
    // setName("");
    // setDescription("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddUser();
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Ошибка: {error}</div>;
  // }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Пользователи</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Добавить
        </button>
      </form>
      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="flex justify-between border p-2 my-1">
            <span>
              {user.name} ({user.description})
            </span>
            <button
              className="bg-red-500 text-white p-1"
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
