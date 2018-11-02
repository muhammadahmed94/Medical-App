import React from "react";
import ReactDOM from "react-dom";
import MedicationReport from "./MedicationReport";

const app = document.getElementById('app')


let props = {
	location: { state: { role: 1, loggedInUserId: 10, reportId: 10 } },
	match: { params: { id: 1 } }
}

ReactDOM.render(
	<MedicationReport {...props} />
	, app);

