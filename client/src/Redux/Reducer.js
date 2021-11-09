    import {

    CREATE_RECIPE,
    GET_ALL_DIETS,
    GET_RECIPE_BYID,
    GET_ALL_RECIPES,
    RECIPE_NAME,
    FILTER_DIETS,
    ORDER_TYPE,

    }from './Actions.js'

    
    const initialState ={
        recipes:[],
        recipe:{},
        recipesFilter: [],
        name: '',
        diets:[],
        newRecipe: {},
        orderBy : "All",
        filterBy: "All",
      
    }
    
    export default function reducer (state = initialState, {type, payload}){
    
        switch (type) {
           
            case GET_ALL_RECIPES:
                return {
                   ...state,
                   recipes: payload,
                   recipesFilter: payload
                }
            case GET_RECIPE_BYID:
                return{
                    ...state,
                    recipe: payload
                }
            case CREATE_RECIPE:
                return{
                    ...state,
                    newRecipe: payload
                }
            case RECIPE_NAME:
                return{
                    ...state,
                    name: payload
                }
            case GET_ALL_DIETS:
                return{
                    ...state,
                    diets: payload
                }
            case FILTER_DIETS:
                    if(payload === "All"){
                        return {...state, recipesFilter: state.recipes,
                            filterBy: payload
                        }
                    }else{
                        
                        return  {...state, recipesFilter: state.recipes.filter(r => r.diets?.includes(payload)),
                        filterBy: payload}      
                    }
            case ORDER_TYPE: 
                switch (payload) {
                   case "HighToLow":
                     return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))],
                     orderBy: payload
                   }
                   case "LowToHigh":
                       return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))],
                       orderBy: payload
                       }
                   case "A-Z":
                        return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))],
                       orderBy: payload
                       }
                   case "Z-A":
                       return {...state, recipesFilter: [...state.recipesFilter.sort((a,b) => (a.name.toLowerCase() <  b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))],
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