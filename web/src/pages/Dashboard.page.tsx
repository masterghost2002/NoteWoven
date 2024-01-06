import useUserStore from "@/store/userUserStore";
const DashboardPage = ()=>{
    const user = useUserStore(s=>s.user);
    return <div>
    
        {user.fullname}
    </div>
};
export default DashboardPage;