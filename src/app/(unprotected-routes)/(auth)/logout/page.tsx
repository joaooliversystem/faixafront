import Link from 'next/link'

function Logout() {

	return (
		<>
			<div className="container">
				<div className="row justify-content-center align-items-center vh-100 py-5">
					{/* Main content START */}
					<div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
						{/* Sign in START */}
						<div className="card card-body text-center p-4 p-sm-5">
							{/* Title */}
							<h1 className="mb-2">Você saiu</h1>
							<p className="mb-0">
								<Link
									href="/login">
									Clique aqui
								</Link>
								{` `} para entrar novamente
							</p>
						</div>
						{/* Sign in START */}
					</div>
				</div> {/* Row END */}
			</div>
		</>
	);
}

export default Logout;
