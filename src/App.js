import { useState } from 'react'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('')
  const [status, setStatus] = useState('')

  function Calc(){
    let imcCalcula = peso / (altura * altura)
    let imcFormated = imcCalcula.toFixed(2)
    setImc(imcFormated)

    if (imcFormated <= 17) {
      setStatus('Magro')
    } else if (imcFormated > 17 && imcFormated <= 25) {
      setStatus('Na média')
    } else if (imcFormated > 25 && imcFormated <= 35) {
      setStatus('Obeso')
    } else if (imcFormated > 35) {
      setStatus('Obesidade Morbida')
    }
  }
  


  return (
      <div className="conteiner">
          <div className="box">
          <div className="componente1">
            <div className='logo'>
              <img src={require('./medias/logo.png')}/>
              <h1>Calculo de IMC</h1>
            </div>  
            <form>
              <input type='text' placeholder="Altura" value={altura} onChange={(e)=>setAltura(e.target.value)}/>
              <input type='text' placeholder="Peso" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
              <button type="button" onClick={Calc}>Calcular</button>
            </form>
          </div>
          <div className="componente2">
            <h2>{status}</h2>
            <h3>{imc}</h3>
            {imc == 0 ? (null) :
            (imc <= 17 ? (<img src={require('./medias/magro.png')} />) :
              (imc > 17 && imc <= 25 ? (<img src={require('./medias/na-media.png')} />):
                  (imc > 25 && imc <= 35 ? (<img src={require('./medias/obeso.png')} />):
                    (imc > 35 ? (<img src={require('./medias/obesidade-morbida.png')} />): null))))}
          </div>
          </div>
        </div>
  );
}

export default App;
