import ImageComponent from "../components/imageComponent";

import profilePic from '../public/static/images/avatar.jpg'
import Image from "next/image";

function Home({posts}) {

  return (
      <div className="uk-container ">
          <br/>
          <br/>
        <div className="uk-grid uk-flex-center">
          {posts.map(function (post, i) {
              return (
                  <div key={post.id} data-uk-grid>
                      <div className="uk-card uk-card-default uk-text-center uk-card-hover uk-card-small">
                          <div className="uk-card-header">
                              <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                  <div className="uk-width-auto">
                                      <Image className="uk-border-circle" width="40" height="40" src={profilePic} alt={"profile"}/>
                                  </div>
                                  <div className="uk-width-expand">
                                      <h3 className="uk-text-meta uk-margin-remove-bottom">{post.title}</h3>
                                      <p className="uk-text-meta uk-margin-remove-top">
                                          <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="uk-card-media-bottom">
                              <ImageComponent post={post}/>
                          </div>
                      </div>
                      <br />
                  </div>

              );
          })}
        </div>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const posts = await res.json();

  posts.forEach((post) => {
      if (post.title.length > 35) {
          post.title = post.title.slice(0, 31)+ '...';
      }
      post.isBlocked = (Math.random() < 0.5) ? false : true;
      post.image = "https://picsum.photos/1300/1200?random="+post.id
      post.placeholder = "https://picsum.photos/100/100?random=1"
  })
  return {
    props: {
      posts
    }
  }
}

export default Home