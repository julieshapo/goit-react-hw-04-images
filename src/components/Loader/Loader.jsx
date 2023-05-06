import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="100"
        radius="9"
        color="#e85b0f"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
