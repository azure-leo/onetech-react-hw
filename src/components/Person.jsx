import styled from 'styled-components'

export default function Person({person, onDelete}) {

	const StyledContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: start;
		background: white;
		border-radius: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border: 1px solid #e1e1e1;
		padding: 10px;
		max-width: 250px;
		font-family: "Mona Sans";
		margin-bottom: 15px;
	`

	const PersonInfo = styled.div`
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	`

	const PersonName = styled.div`
		text-align: start;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 10px;
	`

	const PersonPhone = styled.div`
		text-align: start;
		font-size: 14px;
		font-weight: 300;
		margin-bottom: 10px;
	`

	const PersonRegistration = styled.div`
	  text-align: start;
		font-size: 12px;
  	color: #777;
	`

	const DeletePerson = styled.div`
		background: red;
		cursor: pointer;
	`

	// const Arrow = styled.div`
  // 	font-size: 24px;
  // 	color: #ccc;
	// `;


	return (
		<StyledContainer>
			<PersonInfo>
				<PersonName>
					{person.name} {person.surname}
				</PersonName>
				<PersonPhone>Phone: <span style={{color: 'black'}}>{person.phone}</span></PersonPhone>
				<PersonRegistration>
					Register: {person.registrationDate.slice(0, 10)}
				</PersonRegistration>
				<DeletePerson onClick={() => onDelete(person.phone)}>
					Delete
				</DeletePerson>
			</PersonInfo>
		</StyledContainer>
	)
}
