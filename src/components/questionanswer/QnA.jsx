import React, { Component } from "react";
import { Link } from "react-router-dom";

class QnA extends Component {
  render() {
    return (
      <div className="TodoApp container">
        <div>
          <div className="container">
            <h1>Welcome to Interview Guide</h1>
            <h4>Overview</h4>
            <div>
              We are honored to see you in our space. The sole intention of this
              space is to guide you throughout all stages of programming and
              designing. We will guide you from basic to advance level of
              tutorials, interview materials and practice questions. Also we
              will provide you the possible behavioral questions. Also, from
              this space we will post various use ful blogs where you can also
              contribute.
            </div>
            <div>
              Our team is committed to help you throughout all the stages of the
              software development life cycle. Thank you for believing us.
            </div>
            <div>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/java">
                  Java
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/kafka">
                  Kafka
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/cassandra">
                  Cassandra
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/sql">
                  MySQL
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/react">
                  React
                </Link>
              </a>
            </div>
            <div>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/java">
                  Java
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/kafka">
                  Kafka
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/cassandra">
                  Cassandra
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/sql">
                  MySQL
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/react">
                  React
                </Link>
              </a>
            </div>
            <div>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/java">
                  Java
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/kafka">
                  Kafka
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/cassandra">
                  Cassandra
                </Link>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <Link className="nav-link" to="/sql">
                  MySQL
                </Link>
              </a>
              <a type="button" class="btn-floating btn-fb p-3">
                <Link className="nav-link" to="/react">
                  React
                </Link>
              </a>
            </div>
          </div>
          <div class="card-deck mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="container card">
              <img
                class="card-img-top"
                src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <main role="main" class="container">
            <div class="row">
              <div class="col-md-8 blog-main">
                <h3 class="pb-3 mb-4 font-italic border-bottom">
                  From the Firehose
                </h3>

                <div class="blog-post">
                  <h2 class="blog-post-title">Sample blog post</h2>
                  <p class="blog-post-meta">
                    January 1, 2014 by <a href="#">Mark</a>
                  </p>

                  <p>
                    This blog post shows a few different types of content that's
                    supported and styled with Bootstrap. Basic typography,
                    images, and code are all supported.
                  </p>
                  <hr />
                  <p>
                    Cum sociis natoque penatibus et magnis{" "}
                    <a href="#">dis parturient montes</a>, nascetur ridiculus
                    mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum. Sed posuere consectetur est at
                    lobortis. Cras mattis consectetur purus sit amet fermentum.
                  </p>
                  <blockquote>
                    <p>
                      Curabitur blandit tempus porttitor.{" "}
                      <strong>Nullam quis risus eget urna mollis</strong> ornare
                      vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
                      id elit.
                    </p>
                  </blockquote>
                  <p>
                    Etiam porta <em>sem malesuada magna</em> mollis euismod.
                    Cras mattis consectetur purus sit amet fermentum. Aenean
                    lacinia bibendum nulla sed consectetur.
                  </p>
                  <h2>Heading</h2>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <h3>Sub-heading</h3>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <pre>
                    <code>Example code block</code>
                  </pre>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta
                    sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum
                    massa.
                  </p>
                  <h3>Sub-heading</h3>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean lacinia bibendum
                    nulla sed consectetur. Etiam porta sem malesuada magna
                    mollis euismod. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </p>
                  <ul>
                    <li>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.
                    </li>
                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla
                    vitae elit libero, a pharetra augue.
                  </p>
                  <ol>
                    <li>Vestibulum id ligula porta felis euismod semper.</li>
                    <li>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </li>
                    <li>
                      Maecenas sed diam eget risus varius blandit sit amet non
                      magna.
                    </li>
                  </ol>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Sed
                    posuere consectetur est at lobortis.
                  </p>
                </div>

                <div class="blog-post">
                  <h2 class="blog-post-title">Another blog post</h2>
                  <p class="blog-post-meta">
                    December 23, 2013 by <a href="#">Jacob</a>
                  </p>

                  <p>
                    Cum sociis natoque penatibus et magnis{" "}
                    <a href="#">dis parturient montes</a>, nascetur ridiculus
                    mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum. Sed posuere consectetur est at
                    lobortis. Cras mattis consectetur purus sit amet fermentum.
                  </p>
                  <blockquote>
                    <p>
                      Curabitur blandit tempus porttitor.{" "}
                      <strong>Nullam quis risus eget urna mollis</strong> ornare
                      vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
                      id elit.
                    </p>
                  </blockquote>
                  <p>
                    Etiam porta <em>sem malesuada magna</em> mollis euismod.
                    Cras mattis consectetur purus sit amet fermentum. Aenean
                    lacinia bibendum nulla sed consectetur.
                  </p>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                </div>

                <div class="blog-post">
                  <h2 class="blog-post-title">New feature</h2>
                  <p class="blog-post-meta">
                    December 14, 2013 by <a href="#">Chris</a>
                  </p>

                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean lacinia bibendum
                    nulla sed consectetur. Etiam porta sem malesuada magna
                    mollis euismod. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </p>
                  <ul>
                    <li>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.
                    </li>
                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p>
                    Etiam porta <em>sem malesuada magna</em> mollis euismod.
                    Cras mattis consectetur purus sit amet fermentum. Aenean
                    lacinia bibendum nulla sed consectetur.
                  </p>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla
                    vitae elit libero, a pharetra augue.
                  </p>
                </div>

                <nav class="blog-pagination  p-3 col-1">
                  <a class="btn btn-outline-primary" href="#">
                    go to top
                  </a>
                </nav>
              </div>

              <aside class="col-md-4 blog-sidebar">
                <div class="p-3 mb-3 bg-light rounded">
                  <h4 class="font-italic">About</h4>
                  <p class="mb-0">
                    Etiam porta <em>sem malesuada magna</em> mollis euismod.
                    Cras mattis consectetur purus sit amet fermentum. Aenean
                    lacinia bibendum nulla sed consectetur.
                  </p>
                </div>

                <div class="p-3">
                  <h4 class="font-italic">Archives</h4>
                  <ol class="list-unstyled mb-0">
                    <li>
                      <a href="#">March 2014</a>
                    </li>
                    <li>
                      <a href="#">February 2014</a>
                    </li>
                    <li>
                      <a href="#">January 2014</a>
                    </li>
                    <li>
                      <a href="#">December 2013</a>
                    </li>
                    <li>
                      <a href="#">November 2013</a>
                    </li>
                    <li>
                      <a href="#">October 2013</a>
                    </li>
                    <li>
                      <a href="#">September 2013</a>
                    </li>
                    <li>
                      <a href="#">August 2013</a>
                    </li>
                    <li>
                      <a href="#">July 2013</a>
                    </li>
                    <li>
                      <a href="#">June 2013</a>
                    </li>
                    <li>
                      <a href="#">May 2013</a>
                    </li>
                    <li>
                      <a href="#">April 2013</a>
                    </li>
                  </ol>
                </div>

                <div class="p-3">
                  <h4 class="font-italic">Elsewhere</h4>
                  <ol class="list-unstyled">
                    <li>
                      <a href="#">GitHub</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                  </ol>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default QnA;
