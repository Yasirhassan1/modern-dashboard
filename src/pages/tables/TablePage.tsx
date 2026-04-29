import Table from "../../components/Table"
import { authorTable, projectTable } from "./data"
export default function TablePage(){  
    return(
        <div className="flex flex-col gap-4  w-full">
            <Table tTitle="Authors table" tHeads={authorTable.columns} tData={authorTable.data} />
            <Table tTitle="Projects table" tHeads={projectTable.columns} tData={projectTable.data} />


        </div>
    )
}