import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
        </div>
        <div>{/* ModelSelection */}</div>
        {/* Map through the ChatRows */}
      </div>
    </div>
  );
}

export default SideBar;
