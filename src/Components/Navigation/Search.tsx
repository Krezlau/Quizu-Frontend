const Search = () => {
  return <div className="form-control w-full flex flex-row justify-center">
    <input type="text" placeholder="Search"
           className="hidden input input-bordered opacity-60 w-full max-w-2xl rounded-r-none sm:block "/>
    <button className="hidden btn btn-circle opacity-60 rounded-l-none no-animation sm:block">
        <span className="material-symbols-outlined">
          search
        </span>
    </button>
    <button className="btn btn-circle ml-auto mr-0 btn-ghost sm:hidden">
        <span className="material-symbols-outlined">
          search
        </span>
    </button>
  </div>
}

export default Search;
