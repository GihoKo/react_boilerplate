import { create } from 'zustand';

interface Book {
  id: string;
  title: string;
}

export const useBookStore = create<{
  books: Book[];
}>((set) => ({
  books: [
    { id: '1', title: '모던 자바스크립트 딥다이브' },
    { id: '2', title: '모던 리액트 딥다이브' },
    { id: '3', title: '우아한 타입스크립트' },
  ],
  setBooks: (books: Book[]) => set({ books }),
}));
