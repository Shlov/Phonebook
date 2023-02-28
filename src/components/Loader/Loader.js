import {Rings} from 'react-loader-spinner';


export const Loader = () => {
  return (
    <Rings
      height="180"
      width="180"
      color="#8707ff"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  )
}