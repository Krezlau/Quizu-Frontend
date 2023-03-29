const CommentForm = () => {
  return <form className="w-full pb-4">
        <textarea className="input input-ghost w-full border-t-0 border-x-0 border-b-2 border-b-primary resize-none"
          placeholder={"Add a comment..."}
          id="comment"
        />
      <div className="w-full flex flex-row justify-end gap-8 px-4 my-4">
        <button type={"button"} className="btn btn-neutral">
          Cancel
        </button>
        <button type={"submit"} className="btn btn-primary">Add</button>
      </div>
    </form>
}

export default CommentForm;
