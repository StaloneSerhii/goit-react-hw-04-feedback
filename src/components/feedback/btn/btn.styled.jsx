import styled from '@emotion/styled';

const BuntonStatistics = styled.button`
  font-size: 20px;
  background-color: antiquewhite;
  border: 1px solid;
  text-transform: capitalize;
  margin-left: 10px;

  :active {
    background-color: #efc286;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export { BuntonStatistics, BtnGroup };
