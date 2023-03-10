const Search = () => {
  return <div className="form-control w-full">
    <input type="text" placeholder="Search"
           className="hidden input input-bordered opacity-60 w-full max-w-2xl sm:block "/>
    <button className="btn btn-circle btn-sm ml-auto mr-0 btn-ghost sm:hidden">
        <span className="material-symbols-outlined">
          search
        </span>
    </button>
  </div>
}

export default Search;
