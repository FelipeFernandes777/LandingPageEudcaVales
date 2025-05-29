
export function PriceCardFlag({flag}: {flag: string}){
  return (
    <div className="p-2 font-medium flex items-center justify-center rounded-3xl shadow-lg w-28 bg-slate-200">
      <p>{flag ? flag : "teste"}</p>
    </div>
  )
}