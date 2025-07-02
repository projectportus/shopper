import React from 'react'
import {useState} from 'react'
import './ui-css/select.css'
export default function SelectComp({ value, onChange }) {
 

  return (
    <div className="flex items-center gap-2">
        <span className="text-[20px]">Show</span>
        <select
            className="select border text-[10px] bg-white"
            value={value}
            onChange={(e) => {
                const newValue = Number(e.target.value);
                onChange(newValue);
            }}
        >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={48}>48</option>
        </select>
    </div>
  )
}
