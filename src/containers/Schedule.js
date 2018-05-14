import React from 'react'

const UNVAILABLE = true;

export default class Schedule extends React.Component {
	renderAvailable() {
		return (
			<section className="wrapper" id="schedule">
				<div className="inner">
					<header className="align-center">
						<h2>The Schedule</h2>
						<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
					</header>
					<div className="flex flex-3">
						<div className="table-wrapper col table1">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>10:00 - 12:00</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
									<tr>
										<td>12:30 - 14:30</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
									<tr>
										<td>15:00 - 17:00</td>
										<td>Intalnire cu mentorul..</td>
										<td>1</td>
									</tr>
									<tr>
										<td>17:30 - 19:30</td>
										<td>Intalnire cu mentorul..</td>
										<td>1</td>
									</tr>
									<tr>
										<td>20:00 - 22:00</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="table-wrapper col table2">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>10:00 - 12:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>12:30 - 14:30</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>15:00 - 17:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>17:30 - 19:30</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>20:00 - 22:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="table-wrapper col table3">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>8:00 - 9:00</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>9:00 - 10:00</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>11:00 - 12:00</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>14:00 - 18:00</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>19:00 - 22:00</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>3</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		);
	}

	renderUnavailable() {
		return (
			<section className="wrapper" id="schedule">
				<div className="inner">
					<header className="align-center">
						<h2>The Schedule</h2>
						<h4>Oops! Looks like we haven't released it yet.</h4>
						<h4>Stay tuned to find out how you will spend your time with us!</h4>
					</header>
				</div>
			</section>
		);
	}

	render() {
		return (
			UNVAILABLE ? this.renderUnavailable() : this.renderAvailable() 
		);
	}
}