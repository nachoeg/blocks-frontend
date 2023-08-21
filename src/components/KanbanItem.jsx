import Project from "./Project";
import Task from "./Task";

function KanbanItem({ type, data }) {
	if (type == "task") return <Task data={data} />;
	if (type == "project") return <Project data={data} />;
}

export default KanbanItem;
