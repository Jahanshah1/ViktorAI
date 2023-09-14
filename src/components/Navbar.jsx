const Navbar = () => {
    return(
        <nav className="bg-[#171717] border-b-2 border-slate-700 backdrop-filter backdrop-blur-lg p-7 flex justify-between items-center">
            <div>
                <a href="/" className="text-white hover:text-gray-300 mr-4">Home</a>
                <a href="/Application" className="text-white hover:text-gray-300">Application</a>
            </div>
            <h1 className="text-white font-bold text-2xl" >ViktorAI </h1>
        </nav>
       
    )
}

export default Navbar;