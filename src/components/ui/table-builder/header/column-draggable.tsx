import { LuUnfoldVertical } from "react-icons/lu";
import { Table } from "../../table";

export function ColumnDraggable() {
	return (
		<Table.Head className="w-[50px]">
			<div className="flex justify-center ">
				<LuUnfoldVertical />
			</div>
		</Table.Head>
	);
}