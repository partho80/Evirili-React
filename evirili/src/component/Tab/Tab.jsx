import React from 'react'

function Tab() {
  return (
      <div>
          <div id="tabs" className="section-top-padding">
		<div className="tabs-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12">
						<div className="tabs-wrapper">
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#tabs-1"
										role="tab">Description</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Reviews
										<span>(1K)</span></a>
								</li>
                                  </ul>
                                  {/* <!-- Tab panes --> */}
							<div className="tab-content">
								<div className="tab-pane active" id="tabs-1" role="tabpanel">
									<p>Lorem Ipsum available, but the majority have suffered alteration in some form
										by injected humour, or randomised words which don't look even slightly
										believable
										you are going to use a passage of Lorem Ipsum, you need to be sure

										There isn't anything embarrassing hidden in the middle of text.</p>
								</div>
								<div className="tab-pane" id="tabs-2" role="tabpanel">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dicta tenetur
										eius quos? Sequi
										blanditiis a ad asperiores assumenda eligendi recusandae, minus est
										reprehenderit quis suscipit sed
										veritatis, at fuga.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Tab