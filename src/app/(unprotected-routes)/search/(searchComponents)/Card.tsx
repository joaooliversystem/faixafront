function Card() {
	return (
		<>
			<div className="card h-100">
				<div className="position-relative">
					<img
						className="img-fluid rounded-top"
						src="assets/images/events/02.jpg"
						alt="alt"
					/>
					<div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
						Hotel
					</div>
				</div>
				{/* Card body START */}
				<div className="card-body position-relative pt-0">
					{/* Tag */}
					<a
						className="btn btn-xs btn-primary mt-n3"
						href="event-details-2.html"
					>
						Photography Workshop
					</a>
					<h6 className="mt-3">
						{" "}
						<a href="event-details-2.html"> Decibel magazine </a>{" "}
					</h6>
					{/* Date time */}
					<p className="mb-0 small">
						{" "}
						<i className="bi bi-calendar-check pe-1" /> Mon, Aug 10, 2022 at
						9:30 AM{" "}
					</p>
					<p className="small">
						{" "}
						<i className="bi bi-geo-alt pe-1" /> London{" "}
					</p>
					{/* Avatar group START */}
					<ul className="avatar-group list-unstyled align-items-center mb-0">
						<li className="avatar avatar-xs">
							<img
								className="avatar-img rounded-circle"
								src="assets/images/avatar/05.jpg"
								alt="avatar"
							/>
						</li>
						<li className="avatar avatar-xs">
							<img
								className="avatar-img rounded-circle"
								src="assets/images/avatar/06.jpg"
								alt="avatar"
							/>
						</li>
						<li className="avatar avatar-xs">
							<div className="avatar-img rounded-circle bg-primary">
								<span className="smaller text-white position-absolute top-50 start-50 translate-middle">
									+34
								</span>
							</div>
						</li>
						<li className="ms-3">
							<small> are attending</small>
						</li>
					</ul>
					{/* Avatar group END */}
					{/* Button */}
					<div className="d-flex mt-3 justify-content-between">
						{/* Interested button */}
						<div className="w-100">
							<input
								type="checkbox"
								className="btn-check d-block"
								id="Interested2"
								defaultChecked
							/>
							<label
								className="btn btn-sm btn-outline-success d-block"
								htmlFor="Interested2"
							>
								<i className="fa-solid fa-thumbs-up me-1" /> Interested
							</label>
						</div>
						<div className="dropdown ms-3">
							<a
								href="#"
								className="btn btn-sm btn-primary-soft"
								id="eventActionShare2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="bi bi-share-fill" />
							</a>
							{/* Dropdown menu */}
							<ul
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="eventActionShare2"
							>
								<li>
									<a className="dropdown-item" href="#">
										{" "}
										<i className="bi bi-envelope fa-fw pe-1" /> Send via Direct
										Message
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{" "}
										<i className="bi bi-bookmark-check fa-fw pe-1" /> Share to
										News Feed{" "}
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{" "}
										<i className="bi bi-people fa-fw pe-1" /> Share to a group
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{" "}
										<i className="bi bi-share fa-fw pe-1" /> Share post via …
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{" "}
										<i className="bi bi-person fa-fw pe-1" /> Share on a friend&apos;s profile
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Card body END */}
			</div>
		</>
	);
}

export default Card;