import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserType } from '@types';
type UserStore = {
    user: UserType,
    setUser: (data: UserType) => void,
    getAccessToken: () => string
}
const initialUser: UserType = {
    admin:null,
    id: '',
    username: '',
    email: '',
    profileUrl: '',
    theme: 'system',
    devices: [],
    accessToken: '',
    createdAt: new Date(),
    updatedAt: new Date(),
}
const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: initialUser,
            setUser: (data: UserType) => set({ user: data }),
            getAccessToken: () => get().user.accessToken
        }),
        {
            name: 'user-data'
        }

    )
);
export default useUserStore;