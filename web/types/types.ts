enum themeType{
    dark = 'dark',
    light = 'light',
    system = 'sysytem'
}
export {themeType};
type Theme = 'dark' | 'light' | 'system'
type AdminType = {
    readonly id:string,
    bio:string,
    domainUrl:string,
    website:string,
    createdAt:Date,
    updatedAt:Date,
}
type UserType = {
    readonly id:string,
    admin:AdminType | null,
    username:string,
    fullname:string,
    email:string,
    profileUrl:string,
    theme:Theme,
    devices:Array<object>,
    accessToken:string,
    createdAt:string,
    updatedAt:string,
}
export type {UserType,Theme}