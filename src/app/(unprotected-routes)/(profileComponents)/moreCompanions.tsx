async function MoreCompanions() {

	return (
		<div className="card">
			<div className="card-header border-0 pb-0">
				<h5>Mais acompanhantes</h5>
			</div>
			<div className="card-body">
				<div className="d-flex">
					<div className="avatar me-3">
						<a href="#!">
							<img
								className="avatar-img rounded-circle"
								src="/assets/images/avatar/05.jpg"
								alt="mockup"
							/>
						</a>
					</div>
					<div>
						<h6 className="card-title mb-0">
							<a href="#!"> Camila Ramos </a>
						</h6>
						<p className="small d-flex align-items-center gap-3">
							<span className="fw-bold">R$ 750/h</span>
							<span className="fw-bold">
								<i className="bi bi-geo-alt-fill"></i>
								Birigui
							</span>
						</p>
					</div>
				</div>

				<div className="d-flex mt-3">
					<div className="avatar me-3">
						<a href="#!">
							<img
								className="avatar-img rounded-circle"
								src="/assets/images/avatar/10.jpg"
								alt="mockup"
							/>
						</a>
					</div>
					<div>
						<h6 className="card-title mb-0">
							<a href="#!"> Alessandra Pinheiros </a>
						</h6>
						<p className="small d-flex align-items-center gap-3">
							<span className="fw-bold">R$ 855/h</span>
							<span className="fw-bold">
								<i className="bi bi-geo-alt-fill"></i>
								Valparaíso
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MoreCompanions;
