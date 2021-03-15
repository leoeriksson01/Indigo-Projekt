import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 1000px;
	margin: auto;
	justify-content: center;
	align-items: center;
`;

const Status = styled.h1`
	font-size: 3rem;
`;

const Button = styled(NavLink).attrs({ to: "/" })`
	background-color: rgb(46, 133, 110);
	border: 0;
	color: white;
	border-radius: 25px;
	padding: 10px 50px;
	width: 100%;
	text-align: center;
	font-size: 1.25rem;
	&:hover {
		text-decoration: none;
		color: white;
	}
	@media (max-width: 1200px) {
		padding: 15px;
		font-size: 1.5rem;
	}
`;

const Image = styled.img.attrs({
	loading: "lazy",
	src: "/assets/willsmithmeme.png",
})`
	width: 300px;
	margin: 50px auto 50px 0;
`;

export default function Component() {
	return (
		<Container>
			<Status>404 Not Found</Status>
			<Image />
			<Button>Take me home</Button>
		</Container>
	);
}
