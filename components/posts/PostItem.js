import Link from 'next/link'
import { backend } from '../../config'
import articleStyles from '../../styles/Article.module.css'

const PostItem = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div class="col-md-4 d-flex ftco-animat">
				<div class="blog-entry justify-content-end">
				<div class="text text-center">
					<a href="blog-single.html" class="block-20 img d-flex align-items-center" style={{"background-image": `url(${backend}${post.CoverPhoto});`}}>
						<div class="meta text-center mb-2 d-flex align-items-center justify-content-center">
						  <div>
							  <span class="day">{post.published_at.substring('8','10')}</span>
							  <span class="mos">{post.published_at.substring('5','7')}</span>
							  <span class="yr">{post.published_at.substring('0','4')}</span>
						  </div>
					  </div>
					</a>
				  <h3 class="heading mb-3"><a href="#">{post.Title.substring('0','27')}</a></h3>
				  <p>{post.body.substring('0','55')}</p>
				</div>
			  </div>
			</div>
      {/* <a className={articleStyles.card}>
        <h3>{post.Title} &rarr;</h3>
        <p>{post.body}</p>
      </a> */}
    </Link>
  )
}

export default PostItem
