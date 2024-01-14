import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserType } from '@/types/types';
import {useState, useEffect} from 'react'
type UserStore = {
    user: UserType,
    setUser: (data: UserType) => void,
    getAccessToken: () => string,
    setProfile: (profileUrl: string) => void,
}
const initialUser: UserType = {
    admin:null,
    id: '',
    fullname:'',
    username: '',
    email: '',
    profileUrl: '',
    theme: 'system',
    devices: [],
    accessToken: '',
    createdAt: '',
    updatedAt: '',
}
const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: initialUser,
            setUser: (data: UserType) => set({ user: data }),
            getAccessToken: () => get().user.accessToken,
            setProfile: (profileUrl: string) => set({user: {...get().user, profileUrl}}),
        }),
        {
            name: 'user-data',
        }

    )
);
const useUserSyncStore = <T>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => UserType,
  ) => {
    const result = store(callback) as UserType
    const [data, setData] = useState<UserType>(initialUser);
  
    useEffect(() => {
      setData(result)
    }, [result])
    return data
  }
export {useUserSyncStore}
export default useUserStore;