import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(inputRef);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
export default UseRefComponent;
