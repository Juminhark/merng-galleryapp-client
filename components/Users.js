import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
	query allUsers {
		allUsers {
			id
			email
			username
		}
	}
`;

export default function Users() {
	const { data, loading, error } = useQuery(QUERY);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		console.error(error);
		return null;
	}

	const users = data.allUsers.slice(0, 4);

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<h3>{user.username}</h3>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
}
