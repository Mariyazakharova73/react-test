import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type UserId = string

export type User = {
  id: UserId
  name: string
  description: string
}

interface UsersState {
  entities: Record<UserId, User>
  ids: UserId[]
  selectedUserId: UserId | null
  fetchUsersStatus: "idle" | "pending" | "success" | "failed"
}

const initialState: UsersState = {
  entities: {},
  ids: [],
  selectedUserId: null,
  fetchUsersStatus: "idle",
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectSelectedUserId: (state: UsersState) => state.selectedUserId,
    selectIsFetchUsersPending: (state: UsersState) =>
      state.fetchUsersStatus === "pending",
    selectIsFetchUsersIdle: (state: UsersState) =>
      state.fetchUsersStatus === "idle",
    selectUsers: createSelector(
      [(state: UsersState) => state.ids, (state: UsersState) => state.entities],
      (ids, entities) => ids.map((id) => entities[id])
    ),
  },
  reducers: {
    selected: (state, action) => {
      state.selectedUserId = action.payload
    },
    selectRemoved: (state) => {
      state.selectedUserId = null
    },
    fetchUsersPending: (state) => {
      state.fetchUsersStatus = "pending"
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      const users = action.payload

      state.fetchUsersStatus = "success"
      state.entities = users.reduce((acc, user) => {
        acc[user.id] = user
        return acc
      }, {} as Record<UserId, User>)
      state.ids = users.map((user) => user.id)
    },
    fetchUsersFailed: (state) => {
      state.fetchUsersStatus = "failed"
    },
  },
})
