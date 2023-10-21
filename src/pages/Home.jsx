import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner'
// import format from "date-fns/format"

const Home = (props) => {
  let propsValue = props;
  let items = propsValue.items
  let repos = propsValue.repos
  const [isLoading, setIsLoading] = useState(false)
 
  const navigate = useNavigate()

  const handleLoad = () => {
    setIsLoading(!isLoading)
  }
  const changePages = () => {
    handleLoad()
    setTimeout(() => {
 navigate('/allrepos')
    }, 2000)
  }
  
  return (
    <div className='w-full h-[110vh] md:h-[85vh] flex justify-center items-center'>
      <div className=" w-full h-[40rem] md:h-[30rem] lg:w-[50rem] lg:h-[25rem]  xl:w-[60rem] xl:h-[30rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg md:flex-row flex-col flex items-start md:items-center">
        <div className="w-full md:w-1/4 pl-8">
          <div className="w-[10rem] h-[10rem] block mx-auto bg-black rounded-full overflow-hidden">
           <img src={items.avatar_url} alt="profile image" className="w-full h-full" />
          </div>
          <p className="text-center mt-5">{ items.login}</p>
          <p className="mt-5 text-sm">
            {items.bio}
          </p>
        </div>
        <div className="flex-1 py-10 pl-7 md:pl-[7rem] space-y-4">
          <p>
            Followers: {items.followers}
          </p>
          <p>
            Following: {items.following}
          </p>
          <p>
            Repos: {repos.length}
          </p>
          <p>
            Website: {items.blog}
          </p>
          <p>
            {/* Date Created: { format(new Date(items.created_at), "dd MMMM yyyy")} */}
          </p>
         
          <div onClick={changePages} className="bg-black border text-white border-black w-[12rem] px-4 py-2 flex justify-center items-center duration-700 hover:bg-white hover:text-black cursor-pointer font-semibold ">
         {isLoading ? <ThreeCircles 
  height="30"
  width="30"
  radius="9"
  color="gray"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> :   <p>Show All Repos</p>}
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Home