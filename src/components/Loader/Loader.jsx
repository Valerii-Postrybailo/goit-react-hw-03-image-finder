import { Oval } from  'react-loader-spinner'

export const Loader = () => {
  return(
    <div 
      style={{display: "block",
        marginLeft: "auto",
        marginRight: "auto"}}
      >
      <Oval
        height={60}
        width={60}
        color="crimson"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="coral-pink"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
    
  )
}