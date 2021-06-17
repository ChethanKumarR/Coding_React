import React from "react";
import './App.css';
import { BasicTable } from "./components/BasicTable";
import { SortedTable } from "./components/SortedTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";
import { StickyTable } from "./components/StickyTable";

function App() {  
  return (
  //   <div className="App">
  //      {/* <BasicTable/> */}
  //      {/* <SortedTable/> */}
  //      {/* <FilteringTable/> */}
  //      {/* <PaginationTable/> */}
  //  </div>

 //Only For RowSelection
   <div>
     {/* <RowSelection/> */}
     {/* <ColumnOrder/> */}
     {/* <ColumnHiding/> */}
     <StickyTable/>
   </div>
  );
}

export default App;
