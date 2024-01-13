import { memo } from 'react';
import { DateTime } from 'luxon';
import ProfilePicker from './ProfilePicker';
const months = [
    "temp",
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  
type Props = {
    username: string,
    email: string,
    profileUrl: string,
    fullname: string,
    joinedAt: string,
    lastUpdatedAt: string,
    handleUpdateProfile: (newProfileImage: File)=>Promise<void>
}
const ProfileCard = ({ username, email, profileUrl, joinedAt, lastUpdatedAt, fullname, handleUpdateProfile }: Props) => {
    const joinedDate = DateTime.fromISO(joinedAt);
    const lastUpadtedAtDate = DateTime.fromISO(lastUpdatedAt);
    return (
        <div
            className="
                dark:bg-dark-gray
                relative 
                block 
                overflow-hidden 
                rounded-lg border 
                border-gray-100 
                dark:border-gray-700
                p-4 
                sm:p-6 
                lg:p-8
            "
        >

            <div className="sm:flex sm:justify-between sm:gap-5">
                <div>
                    <h3 className="
                        text-lg 
                        font-bold 
                        text-light-selected-text
                        dark:text-dark-selected-text
                        sm:text-xl
                        ">
                        {fullname}
                    </h3>
                    <p
                        className="
                            mt-1 
                            text-xs 
                            font-medium 
                            text-light-normal-text
                            dark:text-dark-normal-text
                        ">
                        @{username}
                    </p>
                    <p className="
                        mt-1 
                        text-xs 
                        font-medium 
                        text-light-normal-text
                        dark:text-dark-normal-text
                    ">
                        {email}
                    </p>
                </div>

                <ProfilePicker
                    profileUrl={profileUrl}
                    handleUpdateProfile={handleUpdateProfile}
                />
            </div>


            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="
                        text-sm 
                        font-medium 
                        text-light-selected-text
                        dark:text-dark-selected-text
                    ">
                        Joined At
                    </dt>
                    <dd className="
                        text-xs 
                        text-gray-500
                        text-light-normal-text
                        dark:text-dark-normal-text
                    ">
                        {joinedDate.day} {months[joinedDate.month]}, {joinedDate.year}
                    </dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className="
                        text-sm 
                        font-medium 
                        text-light-selected-text
                        dark:text-dark-selected-text
                    ">
                        Last Updated At
                    </dt>
                    <dd className="
                        text-xs 
                        text-gray-500
                        text-light-normal-text
                        dark:text-dark-normal-text
                    ">
                        {lastUpadtedAtDate.day} {months[lastUpadtedAtDate.month]}, {lastUpadtedAtDate.year}
                    </dd>
                </div>
            </dl>
        </div>
    )
};
export default memo(ProfileCard)