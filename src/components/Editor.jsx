import styled from "styled-components";
import { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onkeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content.trim() === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content.trim());
    setContent("");
  };

  return (
    <EditorContainer>
      <Input
        ref={contentRef}
        type="text"
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        onKeyUp={onkeyUp}
        value={content}
      />
      <Button onClick={onSubmit}>Add</Button>
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
  font-size: 1rem;
`;

export default Editor;
