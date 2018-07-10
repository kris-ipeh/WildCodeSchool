import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
    // C'est dans le constructeur qu'on gère l'état 
        this.state = {
          password : '',
          security: '',
          disableSubmit: true
        }
        //debuggage js pour pouvoir invoquer les classes avec this., on utilise bind()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.testPassword = this.testPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Check du changement d'état
    handleChange(e) {
      this.testPassword(e.target.value);

      this.setState({
        password : e.target.value
      });
    }
    
    testPassword(passToTest) {
      if (passToTest.length <= 6) {
        this.setState({
          security : 'weak',
          disableSubmit : true
        });
      }
      if (passToTest.length > 6 && /[a-zA-Z]/g.test(passToTest)) {
        this.setState({
          security : 'medium',
          disableSubmit : false
        });
      }
      if (passToTest.length > 6 && /[a-zA-Z]/g.test(passToTest) && /\W/g.test(passToTest)) {
        this.setState({
          security : 'strong',
          disableSubmit : false
        });
      }
    }

    // Quand on clique sur envoyer 
    handleSubmit(event) {
        alert(`Password : ${this.state.password}`);
        console.log(`${this.state.password}`);
        
        event.preventDefault();
      }

  render() {

    let message ;

    if (this.state.security === 'weak') {
      message = 'Mot de passe faible'
    }
    if (this.state.security === 'medium') {
      message = 'Mot de passe moyen'
    }
    if (this.state.security === 'strong') {
      message = 'Mot de passe fort'
    }


    return (
        <div className="Password">
        <form onSubmit={this.handleSubmit}>
        <input type="password" name="password" placeholder="mot de passe"  onChange={ this.handleChange }/>
        <button id="button" type="submit">Valider</button>
        <div>
          { message }
        </div>
      </form>
    </div>
    )
  }
}

export default Password;