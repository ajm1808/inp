import React from 'react';
import styled from 'styled-components';

const StyledWrapper=styled.div`
    background: ${props=>props.themeColor};

`

const Header = () => (
      <StyledWrapper themeColor="grey">

      </StyledWrapper>
      
    
  );
  
  export default Header;