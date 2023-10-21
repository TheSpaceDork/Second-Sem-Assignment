import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Octokit } from "octokit";
import { Link } from "react-router-dom";

const IndividualRepo = () => {
  const { id } = useParams()
const [items, setItems] = useState([])
 const octokit = new Octokit({});

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await octokit.request(`GET /repos/TheSpaceDork/${id}`)
      const data = await res.data
      setItems(data)
  console.log(data)
    }
    fetchRepos()
  }, [id])

  return (
    <div className="w-full pt-[5rem] h-[80vh] flex justify-center items-center">
      <div className="h-[15rem] w-full md:w-[30rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg px-4 flex flex-col justify-between py-4" >
        <p className="font-semibold text-4xl">{items.name}</p>
        <p>
          {items.language}
        </p>
        <div className="flex items-center space-x-4">
          {items.private ? <p>Private</p> : <p>Public</p>}
          <p>Watchers: {items.watchers }</p>
        </div>
        <Link to="/allrepos">
          
        <div className="bg-black border text-white border-black w-full px-4 py-2 flex justify-center items-center duration-700 hover:bg-white hover:text-black cursor-pointer font-semibold ">
          Back To All Repos
  </div>
        </Link>
      </div>
    </div>
  )
}

export default IndividualRepo