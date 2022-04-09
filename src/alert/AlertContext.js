import {createContext, useContext, useReducer, useState} from "react";

const AlertContext = createContext()
// const AlertToggleContext = createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext)
// }

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, visible: true, text: action.text}
    case HIDE_ALERT:
      return {...state, visible: false}
    default:
      return state
  }
}

export const AlertProvider = ({children}) => {
  // const [alert, setAlert] = useState(false)
  // const toggle = () => setAlert(prev => !prev)

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = text => dispatch({type: SHOW_ALERT, text})
  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      show, hide, text: state.text
      // visible: alert,
      // toggle
    }}>
      {/*<AlertToggleContext.Provider value={toggle}>*/}
      {children}
      {/*</AlertToggleContext.Provider>*/}
    </AlertContext.Provider>
  )
}
