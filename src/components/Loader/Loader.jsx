import { MagnifyingGlass } from 'react-loader-spinner';
import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </LoaderWrapper>
  );
};

export default Loader;
