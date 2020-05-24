class Home extends Component {
  constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
  }


  logout() {
      fire.auth().signOut();
  }

  render() {
      return (
        <div> Welcome Home</div>     
);

  }

}

export default Home;