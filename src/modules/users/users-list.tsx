import { memo, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useAppStore,
} from "../../shared/redux";
import { fetchUsers } from "./model/fetch-users";
import { User, usersSlice } from "./users.slice";

export function UsersList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSlice.selectors.selectUsers);
  const appStore = useAppStore();

  const isPending = useAppSelector(
    usersSlice.selectors.selectIsFetchUsersPending
  );

  useEffect(() => {
    fetchUsers(appStore.dispatch, appStore.getState);
  }, [appStore, dispatch]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-between">
        <ul className="list-none">
          {users.map((user) => (
            <UserListItem user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const UserListItem = memo(function UserListItem({ user }: { user: User }) {
  return (
    <li key={user.id} className="py-2">
      <div className="flex items-center gap-2">
        {user.name}
        <button
          // onClick={handleDeleteButtonClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded"
          // disabled={isLoadingDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
});
