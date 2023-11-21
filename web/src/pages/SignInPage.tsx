import SignInForm from "@/components/forms/SignIn.form";

export default function SignInPage() {
    return (
        <div
            className="
                flex flex-col 
                justify-center 
                items-start 
                w-full 
                md:w-1/4 
                gap-10 
                text-start
                p-5
                "
        >
                <h1
                    className="text-[48px] font-bold"
                >
                    Sign In
                </h1>
                <SignInForm />
        </div>
    )
}
