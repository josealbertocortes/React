
import './App.css';

import Header from './components/Header'
import Person from './components/Person'
import Card from './components/Card';
function App() {
  return (
    <div className="cards">
    <Card
    title="Card1"
    description="El lobo es un mamífero que pertenece a la familia de los carnívoros y cuenta con varias subespecies. Un lobo puede variar en cuanto a su peso y tamaño, dependiendo la región en la que habite y de la subespecie. Su altura oscila entre los 80 y 85 cm y su medida de longitud es de 105-160 de largo. El peso va de 25 a 38.5 kilos, pero descubrimientos científicos han comprobado que hay lobos de hasta 80 kilos; aquellos de más de 54 kg son muy raros. Sus colmillos miden generalmente 6 cm de largo."
    author = "Jose"
    tags ={ ["amarillo","azul","doce"] }
    views = {25}
    />

<Card
    title="Card1"
    description="El lobo es un mamífero que pertenece a la familia de los carnívoros y cuenta con varias subespecies. Un lobo puede variar en cuanto a su peso y tamaño, dependiendo la región en la que habite y de la subespecie. Su altura oscila entre los 80 y 85 cm y su medida de longitud es de 105-160 de largo. El peso va de 25 a 38.5 kilos, pero descubrimientos científicos han comprobado que hay lobos de hasta 80 kilos; aquellos de más de 54 kg son muy raros. Sus colmillos miden generalmente 6 cm de largo."
    author = "Jose"
    tags ={ ["amarillo","azul","doce"] }
    views = {25}
    />

<Card
    title="Card1"
    description="El lobo es un mamífero que pertenece a la familia de los carnívoros y cuenta con varias subespecies. Un lobo puede variar en cuanto a su peso y tamaño, dependiendo la región en la que habite y de la subespecie. Su altura oscila entre los 80 y 85 cm y su medida de longitud es de 105-160 de largo. El peso va de 25 a 38.5 kilos, pero descubrimientos científicos han comprobado que hay lobos de hasta 80 kilos; aquellos de más de 54 kg son muy raros. Sus colmillos miden generalmente 6 cm de largo."
    author = "Jose"
    tags ={ ["amarillo","azul","doce"] }
    views = {25}
    />

    </div>
  );
}

export default App;
