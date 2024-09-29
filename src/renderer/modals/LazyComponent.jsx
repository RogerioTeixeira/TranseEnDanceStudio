
import { Suspense , ErrorBoundary , lazy } from 'react';
const LazyComponent = ({ filename }) => {
    const handleModalClose = () => console.warn('Hereby I promise to close this modal!')
 
    const Component = lazy(() => import(`./${filename}/${filename}.jsx`))
 
    return (
        <Suspense fallback={null}>
            <ErrorBoundary>
                {filename ? (
                    <Component onClose={handleModalClose} />
                ) : null}
            </ErrorBoundary>
        </Suspense>
    )
 }

 export default LazyComponent;