import { useAppStore } from "@/stores/useAppStore";
import { useExampleQuery } from "@/hooks/useExampleQuery";

export default function Home() {
  const { count, increment, decrement } = useAppStore();
  const { data, isLoading } = useExampleQuery();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          -
        </button>
        <span className="font-mono text-xl">{count}</span>
        <button
          onClick={increment}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          +
        </button>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <pre className="rounded bg-gray-100 p-4 text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
