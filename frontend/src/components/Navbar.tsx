
const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 border border-yellow-300 bg-[#242424] bg-opacity-90 rounded-full text-white shadow-sm shadow-yellow-600 text-lg">
      <div className="px-3" >AI Conclave</div>  
      <ul
        className="flex list-none gap-6">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Admin Panel</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
