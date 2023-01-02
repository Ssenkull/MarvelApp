import Spinner from '../components/spinner/Loading';
import ErrorMessage from '../components/errorMessage/ErrorNotification';
import Skeleton from '../components/skeleton/Skeleton';

 const setContent = (process, Component, data) =>  {
    switch (process) {
        case 'waiting':
                return <Skeleton/>;
                break;
        case 'loading':
                return <Spinner/>;
                break;
        case 'confirmed':
                return <Component data={data}/>;
                break;
        case 'error':
                return <ErrorMessage/>;
                break;
        default:
                throw new Error('Unexpected process state');
    }
}

export default setContent;