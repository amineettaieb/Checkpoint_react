import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      <form>
    <div class="mb-3">
        <label htmlFor="inputEmail" class="form-label">Adresse email</label>
        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">Votre e-mail ne sera pas diffusé.</div>
    </div>
    <div class="mb-3">
        <label htmlFor="inputMdp" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="inputMdp"/>
    </div>
    <div class="mb-3">
        <label htmlFor="commentaire">Commentaire</label>
        <textarea class="form-control" placeholder="Laissez-nous un commentaire !" id="commentaire" style={{height: "100px"}}/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check"/>
        <label class="form-check-label" for="check">Se souvenir de moi</label>
    </div>
    <div class="mb-3 form-check form-switch">
        <input class="form-check-input" type="checkbox" id="switch"/>
        <label class="form-check-label" for="switch">Switch</label>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radios" id="radio1" value="option1" checked/>
            <label class="form-check-label" for="radio1">
                Radio 1
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radios" id="radio2" value="option2"/>
            <label class="form-check-label" for="radio2">
                Radio 2
            </label>
        </div>
    </div>
    <div class="mb-3">
        <label htmlFor="range1" class="form-label">Exemple range</label>
        <input type="range" class="form-range" id="range1"/>
    </div>
    <div class="mb-3">
        <select class="form-select" aria-label="Exemple select">
            <option selected>Sélectionner une option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
</form>

      }
    </div>
  );
}

export default App;
