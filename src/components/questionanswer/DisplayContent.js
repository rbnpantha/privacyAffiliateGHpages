import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts.js";
import Pagination from "./Pagination.js";
import { QA_API_URL } from "../../Constants";

const DisplayContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`${QA_API_URL}/qa/all`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-primary mb-3">My Questions</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <div className="container">
        <div class="row">
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
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
