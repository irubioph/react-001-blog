const Home = () => {
  const handleClick = (e) => {
    console.log('hello ivan', e);
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return ( 
    <div className="App">
      <div className="content">
        <h2>Home</h2>   
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => {
            handleClickAgain('mario', e);
        }}>Click me again!</button>
      </div>   
    </div>
   );
}
 
export default Home;