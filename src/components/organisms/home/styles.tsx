import styled from "styled-components";
import { device } from "../../../shared/size";

export const HomeWrapper = styled.div`

  .body--resvert{
    padding: 0  20%;
  }
  .size{
    display:flex;
    column-gap: 60px;
  }
  @media ${device.laptopL} {
 .size{
    display:block;
    column-gap: 60px;
  }
  .body--resvert{
    padding: 0  30%;
  }
}
  @media ${device.tablet} {
    
    margin: 1.5rem;
    .input-wrapper {
      margin: 3%;
    }
    .body--resvert{
    padding: 0  10%;
  }
  }

  @media ${device.laptopS} {

  .body--resvert{
    padding: 0  20%;
  }
}
`;
