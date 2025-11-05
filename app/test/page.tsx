'use client'
export default function TestPage() {
  return (
    <div className="w-full max-w-[1536px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-red-200 p-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="bg-white border h-64 flex items-center justify-center text-2xl font-bold">
          {i}
        </div>
      ))}
    </div>
  )
}
