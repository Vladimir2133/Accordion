import styled from "styled-components";

const Tabs = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
`;

const ButtonStyle = styled.button`
  background-color: ${props => props.backgcolor || "inherit"};
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  -webkit-user-select: none;

  &:hover {
    background-color: #bcbaba;
  }
`;

const TabContent = styled.div`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;
export { Tabs, ButtonStyle, TabContent };
