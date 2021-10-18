export const FormatInfoApi = (apiValue, Icon) => {
  const text = apiValue || 'Not Available'
  return <p className={!apiValue ? "not-available" : ""}> <Icon fontSize="18px" /> <span> {text} </span></p> 
}