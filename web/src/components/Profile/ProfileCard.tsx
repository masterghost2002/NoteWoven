import { memo } from 'react';
import { DateTime } from 'luxon';
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
    lastUpdatedAt: string
}
const ProfileCard = ({ username, email, profileUrl, joinedAt, lastUpdatedAt, fullname }: Props) => {
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

                <div className="sm:shrink-0 my-2">
                    <img
                        alt="Paul Clapton"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />
                </div>
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