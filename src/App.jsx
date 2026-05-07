import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
import './index.css'

const App = () => {
  const [thin, setThin]       = useState(0)
  const [thick, setThick]     = useState(0)
  const [udon, setUdon]       = useState(0)
  const [tofu, setTofu]       = useState(0)
  const [chicken, setChicken] = useState(0)
  const [beef, setBeef]       = useState(0)
  const [mild, setMild]       = useState(0)
  const [medium, setMedium]   = useState(0)
  const [hot, setHot]         = useState(0)

  const totalNoodle = thin + thick + udon
  const totalMeat   = tofu + chicken + beef
  const totalSpice  = mild + medium + hot
  const grandTotal  = totalNoodle + totalMeat + totalSpice

  const incrementThin    = () => setThin(t => t + 1)
  const incrementThick   = () => setThick(t => t + 1)
  const incrementUdon    = () => setUdon(u => u + 1)
  const incrementTofu    = () => setTofu(t => t + 1)
  const incrementChicken = () => setChicken(c => c + 1)
  const incrementBeef    = () => setBeef(b => b + 1)
  const incrementMild    = () => setMild(m => m + 1)
  const incrementMedium  = () => setMedium(m => m + 1)
  const incrementHot     = () => setHot(h => h + 1)
  const resetAll = () => {
    setThin(0); setThick(0); setUdon(0)
    setTofu(0); setChicken(0); setBeef(0)
    setMild(0); setMedium(0); setHot(0)
  }

  return (
    <div className="app">
      <h1>Ramen Order Tracker</h1>

      <section className="order-section">
        <h2>Noodle Type</h2>
        <div className="button-group">
          <Button handleClick={incrementThin}  text="Thin" />
          <Button handleClick={incrementThick} text="Thick" />
          <Button handleClick={incrementUdon}  text="Udon" />
        </div>

        <h2>Meat Type</h2>
        <div className="button-group">
          <Button handleClick={incrementTofu}    text="Tofu" />
          <Button handleClick={incrementChicken} text="Chicken" />
          <Button handleClick={incrementBeef}    text="Beef" />
        </div>

        <h2>Spice Level</h2>
        <div className="button-group">
          <Button handleClick={incrementMild}   text="Mild" />
          <Button handleClick={incrementMedium} text="Medium" />
          <Button handleClick={incrementHot}    text="Hot" />
        </div>

        <div className="reset-row">
          <Button handleClick={resetAll} text="Reset All" />
        </div>
      </section>

      <Statistics
        thin={thin} thick={thick} udon={udon}
        tofu={tofu} chicken={chicken} beef={beef}
        mild={mild} medium={medium} hot={hot}
        totalNoodle={totalNoodle}
        totalMeat={totalMeat}
        totalSpice={totalSpice}
        grandTotal={grandTotal}
      />
    </div>
  )
}

export default App
