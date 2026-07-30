import {useEffect,useRef,useState} from 'react';
interface Props{label:string;value:number;onChange:(value:number)=>void;min?:number;step?:string;error?:string;integer?:boolean}
export default function DecimalField({label,value,onChange,min=0,step='0.01',error,integer=false}:Props){
 const [draft,setDraft]=useState(()=>String(value));const focused=useRef(false);
 useEffect(()=>{if(!focused.current)setDraft(String(value))},[value]);
 const change=(next:string)=>{const pattern=integer?/^\d*$/:/^\d*(?:[.,]\d*)?$/;if(!pattern.test(next))return;setDraft(next);if(next===''||/[.,]$/.test(next))return;const parsed=Number(next.replace(',','.'));if(Number.isFinite(parsed))onChange(parsed)};
 const blur=()=>{focused.current=false;if(draft===''||/[.,]$/.test(draft)){setDraft(String(value));return}const normalized=draft.replace(',','.');setDraft(normalized);const parsed=Number(normalized);if(Number.isFinite(parsed))onChange(parsed)};
 return <label className="field"><span>{label}</span><input inputMode={integer?'numeric':'decimal'} value={draft} min={min} step={step} onFocus={()=>focused.current=true} onChange={e=>change(e.target.value)} onBlur={blur} aria-invalid={!!error}/>{error&&<small className="error">{error}</small>}</label>
}
