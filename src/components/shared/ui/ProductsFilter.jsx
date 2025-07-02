import * as React from "react";
import { Input } from "@/components/shared/ui/input";
import SelectComp from "./Select-comp";
import Icons from '@/assets/icons/shared/ui-icons/Icons.jsx'

export default function ProductsFilter({
  search,
  setSearch,
  perPage,
  setPerPage,
  startIndex,
  endIndex,
  totalResults,
}) {
  return (
    <div className="filt w-full bg-[#F9F1E7] flex flex-col gap-[20px] items-center md:flex-row md:justify-around md:gap-[25%] p-2 md:p-4 ">
      <div className="cont2 flex md:items-center gap-5">
        <div className="filtb flex items-center h-full">
          {icons.filter}
          <span className="text-[20px]">Filter</span>
        </div>
        <div className="showing-b w-[fit] pl-5  border-l-1 flex justify-end items-center h-full ">
          Showing {startIndex + 1}-{Math.min(endIndex, totalResults)} of{" "}
          {totalResults} results
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 ">
        <div className="flex items-center ">
          <SelectComp value={perPage} onChange={setPerPage} />
        </div>

        <div className="flex items-center md:w-[288px] gap-2">
          <span className="sort text-[16px] md:text-[16px] font-normal">
            Sort By
          </span>
          <Input
            placeholder="Default"
            className="w-[140px] text-[16px] h-[45px] md:w-[188px] bg-white md:p-6 border-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
