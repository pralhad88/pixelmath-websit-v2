import './styles.scss';

function OurHappiness(params) {
  return (
    <div className="row pixel-happiness">
      <div className="col-sm-12 col-md-3 col-lg-3 align-content-center">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2><b>Our</b></h2>
            <h2><b>Happiness</b></h2>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9 align-content-center">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="1000">
              <div class="carousel-inner row w-100 mx-auto" role="listbox">
                <div class="carousel-item col-md-4  active">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 1" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=1" alt="slide 1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 2" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=2" alt="slide 2" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 3" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=3" alt="slide 3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 4" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=4" alt="slide 4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 5" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=5" alt="slide 5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 5" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=6" alt="slide 6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item col-md-4 ">
                  <div class="panel panel-default">
                    <div class="panel-thumbnail">
                      <a  title="image 6" class="thumb">
                        <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=7" alt="slide 7" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurHappiness;