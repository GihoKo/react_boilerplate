import styled from 'styled-components';
import { useBookStore } from './../store/useBookStore';

export default function App() {
  const { books } = useBookStore((state) => state);

  return (
    <div>
      <StyledH1>My React App!</StyledH1>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}

const StyledH1 = styled.h1`
  color: red;
  overflow: hidden;
  inset: 0;
`;
