import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = () => {
  return (
    <Wrapper>
      <CircularProgressbar value={60} text="60%" />
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  background-color: var(--light-blue);
`;
