import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { useAddUserMutation, useGetUsersQuery } from "./redux/usersApi";
import { deleteUser, User } from "./redux/usersSlice";

const UserList = () => {
  const { data = [], isLoading } = useGetUsersQuery();

  const [addUser] = useAddUserMutation();

  const dispatch = useDispatch<AppDispatch>();
  //const users = useSelector((state: RootState) => state.users.items);
  // const isLoading = useSelector((state: RootState) => state.users.isLoading);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleAddUser = async () => {
    if (name.trim() && description.trim()) {
      await addUser({ name, description }).unwrap();

      setName("");
      setDescription("");
    }
  };

  // const handleAddUser = () => {
  //   if (name.trim() && description.trim()) {
  //     dispatch(addUser({ name, description }));
  //     setName("");
  //     setDescription("");
  //   }
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Пользователи</h1>
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Email"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddUser}>
          Добавить
        </button>
      </div>
      <ul>
        {data.map((user: User) => (
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
