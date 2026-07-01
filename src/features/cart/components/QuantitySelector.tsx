"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  max: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantitySelector({
  value,
  max,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-300">
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= 1}
        className="flex h-10 w-10 items-center justify-center border-r transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Minus size={16} />
      </button>

      <div className="flex h-10 min-w-12 items-center justify-center px-4 font-semibold">
        {value}
      </div>

      <button
        type="button"
        onClick={onIncrease}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center border-l transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
