import './App.css'
import logo from './assets/logo.svg'
import c from './assets/c.svg'
import outline from './assets/outline.svg'

function App() {
  return (
    <>
      <article className='center' style={{paddingInline: '16px'}}>
        <div className='flex'>
          <div className='nr'>
            <h1 className='c'>JUSTC</h1>
            <p className='rb c desc'>A powerful scripting language designed for automation.</p>
            <div className='flex2' style={{marginTop: '16px'}}>
              <a className='btn' data-text="Get Started" href='/docs/'>Get Started</a>
              <a className='btn2' data-text="Try JUSTC online" href='#playground'>Try JUSTC online</a>
            </div>
          </div>
          <div>
            <img src={logo} className='logo'/>
            <div className='i'>
              <div className='glow'><img src={c} className='logo deco'/></div>
              <img src={outline} className='logo deco outline'/>
              <img src={outline} className='logo deco outline2'/>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default App
