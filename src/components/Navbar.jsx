import { Link } from "react-router-dom"


const Navbar = () => {
  return (
      <nav className="h-[4rem] w-full py-8">
          <div className="px-6 md:px-24 flex justify-between items-center">
              <Link to={'/'}>
              <div>
                  <p>
                  Github Repos
                      
                  </p>
              </div>
                  
              </Link>
              <Link to="/test">
              
              <div className="bg-red-400 text-white px-4 py-2 rounded-sm">
                  Test Error Boundary
              </div>
              </Link>
          </div>
    </nav>
  )
}

export default Navbar