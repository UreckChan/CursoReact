import { useEffect, useState } from "react"

const FollowMouse = () => { 
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  
    useEffect(() => {
      console.log('effect', {enabled})
      
      const handleMouseMove = (event) => {
        const {pageX, pageY} = event
        //console.log('handleMouseMove', {pageX, pageY})
        setPosition({x: pageX, y: pageY})
      }
      
      if(enabled){
        window.addEventListener('mousemove', handleMouseMove)
      }
  
      return()=>{
        console.log('cleanup', {enabled})
        window.removeEventListener('mousemove', handleMouseMove)
      }
      
    }, [enabled])
  
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  

  
  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
    )

}




function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
