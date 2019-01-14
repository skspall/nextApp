import React from 'react';
import { withRouter } from 'next/router';

class Books extends React.Component {
	static async getInitialProps({ query }) {
		const title = query.title;
		let bookList = [];
		switch( title ) {
			case "Horror": 
				bookList = [ "The Shining", "Frankenstein", "Carrie" ];
				break;
			case "Mystery": 
				bookList = [ "Gone Girl", "Killing Floor" ];
				break;
			case "Fiction": 
				bookList = [ "The Alchemist", "Pride and Prejudice", "The Kite Runner", "Malgudi Days" ];
				break;
			case "Romance": 
				bookList = [ "Jane Eyre", "The Notebook", "The Fault in our Stars" ];
				break;
		}
		return { bookList };
	}

	render() {
		return (
			<div className="list-style">
				<h3>Books ({this.props.router.query.title})</h3>
				<ul>
					{
						this.props.bookList.map( (book, index) => {
							return (
								<li key={index}>
									<a>
										{book}
									</a>
								</li>
							)
						} )
					}
				</ul>
				<style jsx>{`
					.list-style{
						width:500px;
					}
					.list-style li, .list-style a{
						float:left;
						height:35px;
						line-height:35px;
						position:relative;
						font-size:15px;
						margin-bottom: 12px;
						font-family: 'Courier', sans-serif;
						transition: background-color 1.5s ease;
					}
					.list-style a{
						width: 400px;
						padding:0 60px 0 16px;
						background:#0089e0;
						color:#fff;
						text-decoration:none;
						-moz-border-radius-bottomright:4px;
						-webkit-border-bottom-right-radius:4px;
						border-bottom-right-radius:4px;
						-moz-border-radius-topright:4px;
						-webkit-border-top-right-radius:4px;
						border-top-right-radius:4px;
					}
					.list-style a:before{
						content:"";
						float:left;
						position:absolute;
						top:0;
						left:-16px;
						width:0;
						height:0;
						border-color:transparent #0089e0 transparent transparent;
						border-style:solid;
						border-width: 18px 12px 18px 0;
					}
					
					.list-style a:after{
						content:"";
						position:absolute;
						top:15px;
						left:5px;
						float:left;
						width:6px;
						height:6px;
						-moz-border-radius:2px;
						-webkit-border-radius:2px;
						border-radius:2px;
						background:#fff;
						-moz-box-shadow:-1px -1px 2px #004977;
						-webkit-box-shadow:-1px -1px 2px #004977;
						box-shadow:-1px -1px 2px #004977;
					}
					.list-style a:hover{
						background:#555;
					}
					
					.list-style a:hover:before{
						border-color:transparent #0089e0 transparent transparent;
					}
					`}
				</style>
			</div>
		)
	}
}

export default withRouter(Books);