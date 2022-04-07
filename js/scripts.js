const mockData = [
	{
		id: "id1",
		type: "co2",
		value: "120",
		online: true,
		location: "Floor 1",
	},
	{
		id: "id2",
		type: "temp",
		value: "20",
		online: true,
		location: "Floor 1",
	},
	{
		id: "id3",
		type: "temp",
		value: "20",
		online: true,
		location: "Floor 3",
	},
	{
		id: "id4",
		type: "co2",
		value: "250",
		online: false,
		location: "Floor 1",
	},
	{
		id: "id5",
		type: "devices",
		value: "20",
		online: true,
		location: "Floor 3",
	},
	{
		id: "id6",
		type: "devices",
		value: "17",
		online: true,
		location: "Basement",
	},
	{
		id: "id7",
		type: "devices",
		value: "2",
		online: true,
		location: "Warehouse",
	},
	{
		id: "id8",
		type: "co2",
		value: "110",
		online: true,
		location: "Warehouse",
	},
	{
		id: "id9",
		type: "temp",
		value: "22.5",
		online: false,
		location: "Basement",
	},
	{
		id: "id10",
		type: "co2",
		value: "475",
		online: false,
		location: "Floor 3",
	},
	{
		id: "id11",
		type: "co2",
		value: "519",
		online: true,
		location: "Basement",
	},
	{
		id: "id12",
		type: "temp",
		value: "14",
		online: true,
		location: "Warehouse",
	},
];

function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(mockData);
		}, 1000 * Math.random());
	});
}

async function appendData() {
	const data = await getData();
	const tableBodyEl = document.querySelector("#table-data");

	let tempInnerHTML = "";

	data.forEach((el) => {
		// OPTION A
		const currentEl = `
		    <tr id="${el.id}">
		        <td data-label="type">${el.type}</td>
		        <td data-label="value">${el.value}</td>
		        <td data-label="online">${el.online}</td>
		        <td data-label="location">${el.location}</td>
		    </tr>
		`;
		tempInnerHTML += currentEl;

		// OPTION B
		// const tr = document.createElement("tr");
		// tr.setAttribute("id", el.id);
		// const tdType = document.createElement("td");
		// tdType.innerText = el.type;
		// const tdValue = document.createElement("td");
		// tdValue.innerText = el.value;
		// const tdOnline = document.createElement("td");
		// tdOnline.innerText = el.online;
		// const tdLocation = document.createElement("td");
		// tdLocation.innerText = el.location;
		// tr.appendChild(tdType);
		// tr.appendChild(tdValue);
		// tr.appendChild(tdOnline);
		// tr.appendChild(tdLocation);
		// tableBodyEl.append(tr);
	});

	tableBodyEl.innerHTML = tempInnerHTML;
}

document.addEventListener("DOMContentLoaded", appendData);
