enum themeType {
    dark = 'dark',
    light = 'light',
    system = 'system'
}
export { themeType };
type Theme = 'dark' | 'light' | 'system'
type User = {
    readonly id: string,
    admin: AdminType | null,
    username: string,
    fullname: string,
    email: string,
    profileUrl: string,
    theme: Theme,
    devices: Array<object>,
    accessToken: string,
    createdAt: string,
    updatedAt: string,
}
type AdminType = {
    readonly id: string,
    bio: string,
    domainUrl: string,
    website: string,
    createdAt: Date,
    updatedAt: Date,
}
type UserType =User| undefined;
type AdminTypeKeys =  keyof Omit<AdminType, 'id' | 'createdAt' | 'updatedAt' >;
type UserTypeKeys =  keyof Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'theme' | 'devices' | 'admin'>
type UserUpdatableFieldType = UserTypeKeys | AdminTypeKeys;
export type { UserType, Theme, AdminType, UserUpdatableFieldType }