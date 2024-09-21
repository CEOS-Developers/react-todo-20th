import styled from "styled-components";

const Editor = () => {
  return (
    <EditorContainer>
      <Input placeholder="Add Todo..." />
      <Button>Add</Button>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  background-color: #d6ddff;
  color: #788bff;
  outline: none;
  border: none;
  font-weight: 500;

  &::placeholder {
    color: #788bff;
    opacity: 1;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  background-color: #788bff;
  color: white;
  border-radius: 10px;
`;

export default Editor;
