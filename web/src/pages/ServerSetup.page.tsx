import ServerSetupForm from "@/components/forms/ServerSetup.form"
export default function ServerSetup() {
    return (
        <div
            className="
                flex 
                flex-col 
                gap-10
                w-full 
                md:w-1/3 
                "
        >
            <h1
                className="text-[48px] font-[700] "
            >
                Welcome to NoteWoven 
            </h1>
            <p
                className="
                    font-[500] 
                    text-light-normal-text
                "
            >
                Thank you for choosing NoteWoven, the ultimate note-taking and task management app. Before you can start using NoteWoven, you need to set up your own server.
                Don’t worry, it’s easy and fast!
            </p>
            <ServerSetupForm/>
        </div>
    )
}
