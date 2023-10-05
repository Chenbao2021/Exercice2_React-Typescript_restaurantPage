import { allergene1, allergene2, allergene3 } from '../assets/allergenes/allergeneMain'

import './allergene.css'
function Allergene() {
  return (
    <div>
        <div className="allergene">
          <div className="allergene-head">
            <h1>Allergènes</h1>
          </div>
          <div className="allergene-contents">
            <div className="allergene-contents-description">
              <h2>Allergènes alimentaires</h2>
              <p><em>Les allergies alimentaires peuvent être responsables de troubles de santé graves</em></p>
              <p><em>Pour diminuer le risque, adoptez un bon réflexe: lisez les étiquettes des produits que vous consommez!</em></p>
            </div>
            <div className="allergene-contents-images">
              <img src={allergene1} />
              <img src={allergene2} />
              <img src={allergene3} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Allergene