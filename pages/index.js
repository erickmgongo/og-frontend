import { server } from '../config'
import ArticleList from '../components/ArticleList'
import PostList from '../components/posts/PostList'
import VideoList from '../components/videos/PostList'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Slideshow from '../components/Slideshow'
import { backend } from '../config'
import Testimonial from '../components/testimonial'
import Slider from '../components/Slider'



export default function Home({ posts, other}) {
  // console.log(posts)
  return (
	  <>
	   <Meta title='OG - Home' />
	  <Header slide={other.slideshow} contact={other.contact} />
    <div>
    
      <section class="ftco-intro">
    	<div class="container-fluid">
    		<div class="row no-gutters">
    			<div class="col-md-4 d-flex">
    				<div class="intro aside-stretch d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon-engineers"></span>
    					</div>
    					<div class="text">
    						<h2>Laserfiche</h2>
    						<p>This is where Laserfiche CMS is taught to the final chapter</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-md-4 d-flex">
    				<div class="intro color-1 d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon"></span>
    					</div>
    					<div class="text">
    						<h2>Gaming</h2>
    						<p>Stream my gaming videos and witness how i win every challange that comes myway</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-md-4 d-flex">
    				<div class="intro color-2 d-lg-flex w-100">
    					<div class="icon">
    						<span class="flaticon"></span>
    					</div>
    					<div class="text">
    						<h2>Videos</h2>
    						<p>Watch videos directly from my youtube channel and have fun with my collection</p>
    					</div>
    				</div>
    			</div>
    			
    		</div>
    	</div>
    </section>
     

      
    </div>

	<PostList posts={posts} smallcaption={'learn'} Caption={'Laserfiche'} />
	<VideoList posts={[...posts,posts[0]]} smallcaption={'watch'} Caption={'Videos'} />
	<PostList posts={posts} smallcaption={'stream'} Caption={'Games'}  />
	<Slider />

	
	  <section class="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img mb-5" id="section-counter">
    	<div class="container">
		<div class="container">
         
               
                    <div class="row justify-content-center pb-5">
                <div class="col-md-7 heading-section text-center ftco-animatee">
                    <span class="subheading">Laserfiche</span>
                    <h2> Projects</h2>
                </div>
                </div>
                </div>
    		<div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="390">0</strong>
                <span>Form</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="600">0</strong>
                <span>Repository</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="12">0</strong>
                <span>Workflow</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animatee">
            <div class="block-18 py-4 w-100">
            	<span class="icon flaticon-checklist"></span>
              <div class="text align-items-center">
                <strong class="number" data-number="540">0</strong>
                <span>Quickfield</span>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
	
	</>




  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/posts`)
  const posts = await res.json()

  const slideres = await fetch(`${backend}/slideshow`)
  const slideshow = await slideres.json()

  const contacts = await fetch(`${backend}/contact`)
  const contact = await contacts.json()

  const abouts = await fetch(`${backend}/about`)
  const about = await abouts.json()

  const category = await fetch(`${backend}/categories`)
  const categories = await category.json()



  return {
    props: {
      posts,
	  other : {
		slideshow,
		contact,
		about,
		categories
	  }
	  
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
