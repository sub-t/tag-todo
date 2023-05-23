import { atom, useAtom } from 'jotai';

export const countAtom = atom(0);

export function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <h1>
      <p>{count}</p>
      <button
        onClick={() => {
          if (count < 100) {
            setCount((c) => c + 1);
          }
        }}
      >
        one up
      </button>
    </h1>
  );
}
