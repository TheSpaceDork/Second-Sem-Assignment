import { Link } from "react-router-dom";


const AllRepos = (props) => {
   let propsValue = props;
   let repos = propsValue.repos
  return (
    <div className="flex-col flex px-4 md:px-24 w-full items-center pt-[5rem]">
      <h1 className="text-5xl font-bold text-center">All Repositories</h1>
      <div className="space-y-4">

      {repos.map((repo, index) => {
        return (
          <div key={index} className="border-b border-black w-full md:w-[50rem] h-[6rem] flex items-center justify-between ">
            <p className="text-xs md:text-lg font-semibold">
              {repo.name}
            </p>
            <Link to={`/allrepos/${repo.name}`} >

            <button className="bg-black border text-white border-black duration-700 px-4 py-2 hover:bg-white hover:text-black">
              More
            </button>
            </Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default AllRepos