import axios from 'axios'
export const CREATE_RECIPE = "CREATE_RECIPE"
export const GET_ALL_DIETS = "GET_ALL_DIETS"
export const GET_RECIPE_BYID = "GET_RECIPE_BYID"
export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const RECIPE_NAME = "RECIPE_NAME"
export const FILTER_DIETS = "FILTER_DIETS"
export const ORDER_TYPE = "ORDER_TYPE"


export const createRecipe= (recipe)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/Recipes/add`, recipe)
        .then(response =>{
            return dispatch({
                type: CREATE_RECIPE,
                payload: response.data
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
                type: GET_RECIPE_BYID,
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
    console.log('hola', name)
    return{
        type: RECIPE_NAME,
        payload: name
    }
}
export const OrderDiet = (data) => {
    return (dispatch) => {
      return dispatch({ type: FILTER_DIETS, payload: data});
      }  
  }
     
  export const OrderType = (data) => {
    return (dispatch) => {
      return dispatch({ type: ORDER_TYPE, payload: data});
      }  
  }



