import { useEffect, useState } from "react";
import styled from "styled-components";
import Person from "../components/Person";

export default function List() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let list = sessionStorage.getItem("list")
		if (!list) {
			list = []
		} else {
			list = JSON.parse(list)
		}
		setData(list)
	}, [])

	const deletePerson = (phone) => {
		let list = sessionStorage.getItem("list")
		if (!list) {
			list = []
		} else {
			list = JSON.parse(list)
		}
		const newList = list.filter((p) => {
			return p.phone !== phone
		})
		sessionStorage.setItem("list", JSON.stringify(newList));
		setData(newList)
	}

	const handleDelete = (phone) => {
		deletePerson(phone)
	}

	return (
		<div>
			{
				data.map((person) => {
					return <Person person={person} onDelete={handleDelete}/>           
				})
			}	
		</div>
	)
}