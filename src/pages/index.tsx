import { useState } from 'react'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(3, false, true, false))

  return (
    <div style={{display: "flex"}}>
      <Porta porta={ p1 } />
    </div>
  )
}
