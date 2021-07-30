import axios from "axios"
import React from "react"
import { backend } from "../config"
import ActivateLinks from "./ActivateLinks"
import Image from 'next/image'


class Nav extends React.Component {
	state = {
		contact:{},
		slideshow:{}
		}

	componentDidMount(){
		axios.get(`${backend}/contact`)
		.then(res => {
		  const contact = res.data;
		  this.setState({ contact });
		})

		axios.get(`${backend}/slideshow`)
		.then(res => {
		  const slideshow = res.data;
		  this.setState({ slideshow });
		})
	}

render(){

  return (
  
    <>
	<div class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<p class="mb-0 phone pl-md-2">
							<a href="#" class="mr-2"><span class="fa fa-phone mr-1"></span>{this.state.contact.phone}</a> 
							<a href="#"><span class="fa fa-paper-plane mr-1"></span> {this.state.contact.email}</a>
						</p>
					</div>
					<div class="col-md-6 d-flex justify-content-md-end">
						<div class="social-media">
			    		<p class="mb-0 d-flex">
			    			<a href={`${this.state.contact.facebook_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
			    			<a href={`${this.state.contact.twitter_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
			    			<a href={`${this.state.contact.instagram_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
			    			<a href={`${this.state.contact.linkedin_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-linkedin"><i class="sr-only">Dribbble</i></span></a>
			    		</p>
		        </div>
					</div>
				</div>
			</div>
		</div>
    
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">

		  <a class="navbar-brand" href="/">
		  <img width='100%' height='50' src="http://localhost:1337/uploads/Group_4_5d759c3286.png" alt="Picture of the author" />			</a> 
		  <h4 class="text-secondary">{this.state.slideshow.AppName}</h4>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">

	        <ActivateLinks />
			<input type="field" style={searchStyle} placeholder="   Search" className="text-secondary"/>

	      </div>
	    </div>
	  </nav>
    
    </>

  )

 }

}


export default Nav


const searchStyle = {

	marginLeft: '2px'

}