import { memo, useState } from 'react';
import useCounterStore from 'src/store/CounterStore';

function Home() {
  const amount = useCounterStore((state) => state.amount);
  const increaseAmount = useCounterStore((state) => state.increase);
  const decreaseAmount = useCounterStore((state) => state.decrease);
  const [value, setValue] = useState<number>(1);

  return (
    <div className="h-[100vh] p-10 flex flex-col justify-center items-center">
      <p className="text-lg text-neutral-600 font-bold">Home page</p>
      <input type="number" value={value} onChange={(e) => setValue(+e.target.value)} />
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => decreaseAmount(value || 1)}
          className="p-2 rounded-sm border border-solid border-neutral-400 "
        >
          -
        </button>
        <div>{amount}</div>
        <button
          className="p-2 rounded-sm border border-solid border-neutral-400 "
          onClick={() => increaseAmount(value || 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default memo(Home);
