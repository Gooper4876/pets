function PetCard({ name, photo, adopted, spiecies, age }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{photo}</td>
            <td>
                {adopted ? <p>Yes</p>: <p>No</p>}
            </td>
            <td>{spiecies}</td>
            <td>{age}</td>
        </tr>
    )
}


export default PetCard