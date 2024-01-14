const Splash = () => {
    return (
        <div
            className="w-full h-screen dark:bg-light-gray bg-light-dark flex flex-col gap-10 justify-center items-center"
        >

            <h1
                className="text-4xl font-bold dark:text-dark-normal-text text-light-normal-text"
            >
                Note Woven
            </h1>
            <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent dark:text-dark-normal-text text-light-normal-text rounded-full dark:text-blue-500" role="status" aria-label="loading">
            </div>
        </div>
    )
};
export default Splash;