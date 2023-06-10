function Heaer() {
  return (
    <nav className="  bg-slate-900 flex items-center gap-2 justify-evenly">
      <div className=" text-white flex items-center gap-3">
        <div className=" cursor-pointer hover:bg-slate-700  px-3 py-5">
          Admin Panel
        </div>
      </div>
      <form className=" relative ">
        <input
          className=" rounded-md p-1 outline-none border-none w-96 focus:bg-slate-800 focus:text-white"
          type="text "
        />
        <div className="  text-red-700 absolute top-1 left-36">Icon</div>
      </form>

      <div className="flex items-center gap-3.5">
        <div className=" relative flex items-center cursor-pointer">
          <div className="text-white">message</div>
          <div className="h-4 w-4 bg-white text-red-700 absolute top-0 left-12">
            4
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white cursor-pointer">Notification</div>
          <div className=" text-white">5</div>
        </div>
        <div className="user-profile">
          <div className=" h-12 w-12 bg-white rounded-full cursor-pointer"></div>
        </div>
      </div>
    </nav>
  );
}

export default Heaer;
