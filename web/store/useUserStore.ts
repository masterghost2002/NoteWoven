import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserType } from '@/types/types';
import {useState, useEffect} from 'react';
import { UserUpdatableFieldType } from '@/types/types';
type UserStore = {
    user: UserType | undefined,
    setUser: (data: UserType) => void,
    getAccessToken: () => string | undefined,
    setProfile: (profileUrl: string) => void,
    setUserUpdate:(updateFor:UserUpdatableFieldType, updateValue:string)=>void
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
            getAccessToken: () =>{
                const user = get().user;
                if(!user) return undefined;
                return user.accessToken;
            },
            setProfile: (profileUrl: string) =>{
                const user = get().user;
                if(!user) return;
                set({user: {...user, profileUrl}})
            },
            setUserUpdate: (updateFor:UserUpdatableFieldType, updateValue:string)=>{
                const user = get().user;
                if(!user) return;
                if(updateFor === 'bio' || updateFor === 'website' || updateFor === 'domainUrl'){
                    const admin = user.admin;
                    if(!admin) return;
                    admin[updateFor] = updateValue;
                }
                else user[updateFor] = updateValue;
                set({user:user});
            }
        }),
        {
            name: 'user-data',
        }

    )
);
const useUserSyncStore = <T>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => UserType | undefined,
  ) => {
    const result = store(callback) as UserType
    const [data, setData] = useState<UserType | undefined>(undefined);
  
    useEffect(() => {
      setData(result)
    }, [result])
    return data
  }
export {useUserSyncStore}
export default useUserStore;