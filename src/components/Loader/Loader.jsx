import { Oval } from  'react-loader-spinner'

export const Loader = () => {
  return(
    <Oval
      height={60}
      width={60}
      color="royalblue"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="navyblue"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  )
}