import Link from 'next/link'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'

import "../styles/main_styles.css"
import "../styles/responsive.css"


// function getPosts () {
//   return [
//     { id: 'blogpost-1', title: 'Sample Post 1', description: 'This is the first blog post of this blog.'},
//     { id: 'blogpost-2', title: 'Sample Post 2', description: 'This is the second blog post of this blog.'},
//     { id: 'blogpost-3', title: 'Sample Post 3', description: 'This is the third blog post of this blog.'},
//   ]
// }

export default () => (
  <Layout title={"Homepage"}>
    <div className="fs_menu_overlay"></div>
  	<div className="fs_menu_container">
  		<div className="fs_menu_shapes">
        <img src="/static/images/menu_shapes.png" alt="" />
      </div>
  		<nav className="fs_menu_nav">
  			<ul className="fs_menu_list">
  				<li><a href="#"><span><span>H</span>Home</span></a></li>
  				<li><a href="#"><span><span>S</span>Services</span></a></li>
  				<li><a href="#"><span><span>E</span>Elements</span></a></li>
  				<li><a href="#"><span><span>B</span>Blog</span></a></li>
  				<li><a href="#"><span><span>C</span>Contact</span></a></li>
  			</ul>
  		</nav>
  		<div className="fs_social_container d-flex flex-row justify-content-end align-items-center">
  			<ul className="fs_social">
  				<li><a href="#"><i className="fab fa-pinterest trans_300"></i></a></li>
  				<li><a href="#"><i className="fab fa-facebook-f trans_300"></i></a></li>
  				<li><a href="#"><i className="fab fa-twitter trans_300"></i></a></li>
  				<li><a href="#"><i className="fab fa-dribbble trans_300"></i></a></li>
  				<li><a href="#"><i className="fab fa-behance trans_300"></i></a></li>
  				<li><a href="#"><i className="fab fa-linkedin-in trans_300"></i></a></li>
  			</ul>
  		</div>
  	</div>
    <div className="home">
  		<div className="hero_slider_container slider_prlx">
  			<div className="owl-carousel owl-theme hero_slider">

          {/* Slider Item */}
  				<div className="owl-item main_slider_item">
  					<div className="main_slider_item_bg" style={{ backgroundImage: 'url("/static/images/main_slider_1.jpg")' }}></div>
  					<div className="main_slider_shapes"><img src="/static/images/main_slider_shapes.png" alt="" style={{ width: "100%" }} /></div>
  					<div className="container">
  						<div className="row">
  							<div className="col slider_content_col">
  								<div className="main_slider_content">
  									<h1>Do you need</h1>
  									<h1>a <span>modern</span> website?</h1>
  									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. </p>
  									<div className="button discover_button">
  										<a href="#" className="d-flex flex-row align-items-center justify-content-center">discover<img src="/static/images/arrow_right.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>

          {/* Slider Item */}
  				<div className="owl-item main_slider_item">
  					<div className="main_slider_item_bg" style={{ backgroundImage: "url('/static/images/main_slider_1.jpg')" }}></div>
  					<div className="main_slider_shapes"><img src="/static/images/main_slider_shapes.png" alt="" style={{ width: "100%" }} /></div>
  					<div className="container">
  						<div className="row">
  							<div className="col slider_content_col">
  								<div className="main_slider_content">
  									<h1>Do you need</h1>
  									<h1>a <span>modern</span> website?</h1>
  									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. </p>
  									<div className="button discover_button">
  										<a href="#" className="d-flex flex-row align-items-center justify-content-center">discover<img src="/static/images/arrow_right.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>

  				{/* Slider Item */}
  				<div className="owl-item main_slider_item">
  					<div className="main_slider_item_bg" style={{ backgroundImage: 'url("/static/images/main_slider_1.jpg")' }}></div>
  					<div className="main_slider_shapes"><img src="/static/images/main_slider_shapes.png" alt="" style={{width: "100%" }} /></div>
  					<div className="container">
  						<div className="row">
  							<div className="col slider_content_col">
  								<div className="main_slider_content">
  									<h1>Do you need</h1>
  									<h1>a <span>modern</span> website?</h1>
  									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. </p>
  									<div className="button discover_button">
  										<a href="#" className="d-flex flex-row align-items-center justify-content-center">discover<img src="/static/images/arrow_right.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>

        {/* Slider Dots */}

  			<div className="main_slider_dots">
  				<div className="container">
  					<div className="row">
  						<div className="col">
  							<ul id="main_slider_custom_dots" className="main_slider_custom_dots">
  								<li className="main_slider_custom_dot active">01.</li>
  								<li className="main_slider_custom_dot">02.</li>
  								<li className="main_slider_custom_dot">03.</li>
  							</ul>
  						</div>
  					</div>
  				</div>
  			</div>

        {/* Slider Dots */}
  			<div className="main_slider_nav_left main_slider_nav">
  				<i className="fas fa-chevron-left trans_300"></i>
  			</div>

  			<div className="main_slider_nav_right main_slider_nav">
  				<i className="fas fa-chevron-right trans_300"></i>
  			</div>
		</div>
	</div>

  </Layout>
)
