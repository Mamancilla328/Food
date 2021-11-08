import {
    
    GET_ALL_RECIPES,
    GET_ALL_DIETS,
    SET_RECIPE_NAME,
    SET_PAGE,
    GET_RECIPE,
    FILTER_RECIPE,
    ORDER_TYPE,
    FILTER_DIETS,

    }from './Actions.js'

    
    const initialState ={
        recipes:[],
        recipe:[],
        recipesFilter: [],
        diets:[],
        name:"",
        orderBy : "All",
        filterBy: "All",
        page:1
    }
    
    export default function reducer (state = initialState, {type, payload}){
    
        switch (type) {
           
            case GET_ALL_RECIPES:
                return {
                   ...state,
                   recipes: payload,
                   recipesFilter: payload
                }
            case SET_RECIPE_NAME:
                return{
                    ...state,
                    name: payload,
                    recipesFilter: payload
                }
            case SET_PAGE:
                return{
                    ...state,
                    page: payload
                }
            case GET_RECIPE:
                return{
                    ...state,
                    recipe: payload
                }
            case GET_ALL_DIETS:
                return{
                    ...state,
                    diets: payload
                }
            case FILTER_RECIPE:
                const newRecipe = state.recipes.result.filter(c =>{
                    return c.status === payload
                })
                return{
                    ...state,
                    recipes:{
                        ...state.recipe,
                        result:newRecipe
                    } 
                }
            case FILTER_DIETS:
                    if(payload === "All"){
                        return {...state, recipesFilter: state.recipes.result,
                            filterBy: payload
                        }
                    }else{
                        
                        return  {...state, recipesFilter: state.recipes.result.filter(r => r.diets?.includes(payload)),
                        filterBy: payload}      
                    }
            case ORDER_TYPE: 
                switch (payload) {
                   case "HighToLow":
                     return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.spoonacularScore > b.spoonacularScore) ? 1 : ((b.spoonacularScore > a.spoonacularScore) ? -1 : 0))],
                     orderBy: payload
                   }
                   case "LowToHigh":
                       return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.spoonacularScore < b.spoonacularScore) ? 1 : ((b.spoonacularScore < a.spoonacularScore) ? -1 : 0))],
                       orderBy: payload
                       }
                   case "A-Z":
                        return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))],
                       orderBy: payload
                       }
                   case "Z-A":
                       return {...state, recipesFilter: [...state.recipesFilter.sort((a,b) => (a.title.toLowerCase() <  b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() < a.title.toLowerCase()) ? -1 : 0))],
                       orderBy: payload
                       }
                   case "All":
                       return {...state, recipesFilter: state.recipes,
                       orderBy: payload
                   }
                   default:
                      return state;
               }
                   default:
                   return state;
        }
    
    }