//import PropTypes from 'prop-types'
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm'

export default function App() {
  return (
    <>
    <Navbar text="TextUtils" about="Home" metrics="About"/>
    <div className="container my-3">
    <TextForm heading = "Enter your text to analyze below"/>
    </div>
    </>
  );
}

// Navbar.PropTypes={
//   text:PropTypes.string
// }

// Navbar.defaultProps={

// }
// export default App;
