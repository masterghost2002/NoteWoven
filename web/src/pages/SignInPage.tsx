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
                "
        >
            <div
                className="
                    text-center
                    text-[16px]
                    font-[500]
                    text-light-normal-text
                    "
            >
                Welcome to NoteWoven, where your notes and tasks intertwine seamlessly. Discover the art of organized creativity!
            </div>
            <h1
                className="text-[48px] font-bold"
            >
                Sign In
            </h1>
            <SignInForm />
        </div>
    )
}
