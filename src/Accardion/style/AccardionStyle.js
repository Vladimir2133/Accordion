import styled from "styled-components";

const AccStyle = styled.div`
  background-color: #eee;
  border-bottom: 1px solid black;

  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  transition: 0.5s;

  &:hover {
    background-color: #ddd;
  }
`;
const AccButton = styled.span`
  display: block;
`;

const AccContent = styled.div`
    margin: 10px;
    width: 20px;
    border-bottom; 1px solid black; 
    display: inline;   
`;

const IconAcc = styled.div`
  margin,padding: 0;
  width: 30px;
  height: 30px;
  float: right;
  background-repeat: no-repeat;
  background-image: url(https://img.icons8.com/windows/32/000000/circled-chevron-down.png);
  transform: rotate(${props => props.imgactive || "0deg"});
`;

export { AccStyle, AccContent, AccButton, IconAcc };
