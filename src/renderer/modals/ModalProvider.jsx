import LazyComponent from './LazyComponent'
/*const MODALS = {
    'TestModal': {
      id: 'TestModal',
      open: true
    },
    'LoginModal': {
      id: 'LoginModal',
      open: false,
      meta: {
        user: 'fedor'
      }
    }
   }*/

   const MODALS = {}

   
   
   const ModalProvider = (props) => {
   
       const modals = Object.keys(MODALS).filter((id) => MODALS[id].open)
   
       return (
           <>
               {modals.map((filename) => (
                   <LazyComponent key={filename} filename={filename} />
               ))}
               {props.children}
           </>
       )
   }

   export default ModalProvider;