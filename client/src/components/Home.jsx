import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getRecipes} from "../Redux/Actions.js";
import Card from "./Card.jsx"
import { Pagination } from "./Pagination";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Home = () => {
    const dispatch = useDispatch()
    const recipes = useSelector(state=> state.recipes)
    const recipesFilter = useSelector(state => state.recipesFilter)
    const filterBy = useSelector(state => state.filterBy)
    const orderBy = useSelector(state => state.orderBy)
    
    useEffect(()=>{
       dispatch(getRecipes({})) 
    },[])

    const [posts, setPosts]= useState(recipes);
    const [currentPage, setCurrentPage]= useState(1);
    const [postsPerPage]= useState(9);
 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

   useEffect(()=>{
     if(filterBy === "All" && orderBy === "All"){
       setPosts(recipes)
     }else{
       setPosts(recipesFilter)
     } 
     setCurrentPage(1)
   }, [recipes, recipesFilter, filterBy, orderBy])

    // const changePage = (page)=>{
    //     dispatch(getRecipes({page}))
    //     setPage(page)
    // }

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
      }
    
    return (
        <div className='container'>
            <div className='buttsBox'>
            {
                currentPosts.map((e)=>{
                    return <Card image={e.image} name={e.name} id={e.id} diets= {e.diets} spoonacularScore={e.spoonacularScore}  />
                })
            }
            </div>

            <div className='butts'>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
            
        </div>
    )
}

export default Home

// {
//     currentPosts.map(rec => (
//       <Link to={`/recipe/details/${rec.id}`}>
//            <div className="RecipeHome">
//          <RecipesCards title={rec.title} spoonacularScore={rec.spoonacularScore} diets={rec.diets} image={rec.image} />
//            </div>
//         </Link>
//     ))}  