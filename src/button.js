import React from 'react'
import {Link} from 'react-router';

export default function Button(props){
	return (
			<Link to={props.link} className="btn btn-primary">
				{props.title}
			</Link>
		)
}