import './App.css'
import PetCard from './PetCard.jsx'
function App() {
  const animalData = [
    { id: 1, name: "Doggo", photo: "", adopted: false, spiecies: "Dog", age: 1 },
    { id: 2, name: "Nut", adopted: true, spiecies: "Dog", age: 5 },
    { id: 3, name: "Cupcake", adopted: false, spiecies: "Cat", age: 4 },

  ]

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Photo</th><th>Adopted</th><th>Spiecies</th><th>Age</th>
          </tr>
        </thead>
        <tbody>
          {animalData.map(
            (data) => (
              <PetCard name={data.name} photo={data.photo} adopted={data.adopted} spiecies={data.spiecies} age={data.age} />
            )
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
