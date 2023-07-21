const SideBar = () => {
  
    return (
        <div className='fixed left-0 h-screen w-auto flex flex-col bg-slate-50 text-slate-700 shadow-md items-center px-6 text-sm space-y-5 py-3'>
            <h1 className="text-xl font-semibold">
                Subreddits
            </h1>
            <i>ELI5</i>
            <i>AskReddit</i>
            <i>facepalm</i>
            <i>mildlyinfuriating</i>
            <i>AmItheAsshole</i>
            <i>worldnews</i>
        </div>
    );
  };
  
  export default SideBar;