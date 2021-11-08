import axios from 'axios'
export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_ALL_DIETS = "GET_ALL_DIETS"
export const SET_RECIPE_NAME = "SET_RECIPE_NAME"
export const ORDER_TYPE = "ORDER_TYPE"
export const FILTER_DIETS = "FILTER_DIETS"
export const SET_PAGE = "SET_PAGE"
export const GET_RECIPE = "GET_RECIPE"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const FILTER_RECIPE = "FILTER_RECIPE"



export const createRecipe= (recipe)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/Recipes/add`, recipe)
        .then(response =>{
            return dispatch({
                type: CREATE_RECIPE
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getDiets = ()=> {
    return (dispatch)=>{
        axios.get(`http://localhost:3001/Diets/types`)
        .then(types =>{
            return dispatch({
                type:GET_ALL_DIETS,
                payload: types.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getRecipe = (id)=>{
    return async (dispatch)=>{
        try {
            const result = await axios.get(`http://localhost:3001/Recipes/${id}`)
            return dispatch({
                type: GET_RECIPE,
                payload: result.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getRecipes = ({name})=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/Recipes?name=${name?name:""}`)
        .then(recipe =>{
            return dispatch({
                type: GET_ALL_RECIPES,
                payload: recipe.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const setRecipeName = (name)=>{
    return{
        type: SET_RECIPE_NAME,
        payload: name
    }
}
export const setPage = (page)=>{
    return{
        type: SET_PAGE,
        payload: page
    }
}

export const OrderDiet = (data) => {
    return (dispatch) => {
      console.log(data)
      return dispatch({ type: FILTER_DIETS, payload: data});
      }  
  }
     
  export const OrderType = (data) => {
    return (dispatch) => {
      console.log(data)
      return dispatch({ type: ORDER_TYPE, payload: data});
      }  
  }


 export const statusFilter =(status)=>{
    return{
        type: FILTER_RECIPE,
        payload: status
    }
}



