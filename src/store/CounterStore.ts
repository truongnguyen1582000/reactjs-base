import { create } from 'zustand';

interface CounterState {
  amount: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

const useCounterStore = create<CounterState>()((set) => ({
  amount: 0,
  increase: (by) => set((state) => ({ amount: state.amount + by })),
  decrease: (by) => set((state) => ({ amount: state.amount - by }))
}));

export default useCounterStore;
