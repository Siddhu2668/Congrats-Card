const element = (
  <div className='Bg-container'>
    <h1 className='Heading'>Congratutaions</h1>
    <div className='card-container'>
      <img
        className='Image1'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='Name'>Kiran v</h1>
      <p className='Description'>
        Vishnu Institute of Computer Education and Technology.Bhimavaram.
      </p>
      <img
        className='Image2'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
