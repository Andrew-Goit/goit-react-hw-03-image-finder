import { ColorRing } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <ColorRing
        height="80"
        width="80"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        visible={true}
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="blocks-wrapper"
        
      />
    </Backdrop>
  );
};

export default Loader;