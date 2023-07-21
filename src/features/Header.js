const Header = () => {
  
    return (
      <header className='sticky top-0 bg-slate-50 flex shadow-md z-40 mr-auto p-4 justify-evenly mb-2'>
        <div>
          <p>
            Reddiot
          </p>
        </div>
        <form>
          <input
            className="bg-slate-200 rounded-md px-3 py-0.5 focus:outline-orange-500"
            type="text"
            placeholder="Search"
            aria-label="Search posts"
          />
          <button type="submit" aria-label="Search" className="text-sm border-solid mx-2">
            🔍
          </button>
        </form>
      </header>
    );
  };
  
  export default Header;