import React from 'react'

const Dashboard = () => {
    return (
            <div className="container py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcome to eHealth Care Management System </h1>
                        <p className="col-md-8 fs-4">Using our this eHealth Care Mananageme System you can now order the medicine.</p>
                     </div>
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="picture.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="picture2.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="picture2.png" alt="Third slide"/>
    </div>
  </div>
</div>

                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button className="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button className="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Dashboard;